package OOPS.Polymorphism;

/*
 * Polymorphism means "many forms." In programming, it’s the idea that a single method or action can work differently depending on the object it’s used with. Imagine you have a universal remote with a "power" button. Press it on a TV, and the TV turns on. Press it on a fan, and the fan starts spinning. Same button, different results—that’s polymorphism!
 */
/*
 * Types of Polymorphism
There are two main types of polymorphism you need to know:

Compile-time Polymorphism (Static Binding)

    Happens when the compiler decides which method to use before the program runs.
    Done through method overloading (and sometimes operator overloading, but not in Java).

!Runtime Polymorphism (Dynamic Binding)

    !Happens when the program is running, and the method to use is decided based on the actual object.
    Done through method overriding.

For FAANG interviews, runtime polymorphism is usually the star of the show, but let’s cover both so you’re fully prepared.
 */

public class learnPolymorphism {
    public static void main(String[] args) {
        System.out.println("Let's talk about polymorphism");

        /*
         * lets talk about STATIC-BINDING OR COMPILE TIME POLYMORPHISM
         * It is implemented via METHOD OVERLOADING.
         */

        // Method Overloading.
        /*
         * Method overloading lets you have multiple methods with the same name in the
         * same class, but they must have different parameters (either a different
         * number of parameters or different types). The compiler picks the right method
         * based on what you pass when you call it.
         */

        Calc myCalc = new Calc();

        int a = myCalc.add(3, 5); // Output will be 8
        System.out.println(a);

        double b = myCalc.add(3.4, 5.2); // Output will be 8.6
        System.out.println(b);

        int c = myCalc.add(3, 2, 1); // Output will be 6
        System.out.println(c);

        // ! This decision happens at compile time, so it’s fast and locked in before
        // the program runs.

        // Runtime Polymorphism or Dynamic Binding (using Method Overriding)
        /*
         * What is Method Overriding?
         * 
         * Method overriding happens when a subclass provides its own version of a
         * method that’s already in its superclass. The method in the subclass must have
         * the same name, return type, and parameters as the superclass method. At
         * runtime, the program decides which version to use based on the actual object.
         */

        // Example.
        Animal pet = new Animal();
        pet.roar(); // the show that is in Animal.

        pet = new Cat();
        pet.roar(); // THE roar in cat is going to be called.

        pet = new Dog();
        pet.roar(); // THE roar in dog is going to be called.

        pet = new Lion();
        pet.roar(); // THE roar in Lion is going to be called.

        /*
         * This is the magic of runtime polymorphism—the behavior changes based on the
         * object, not the variable type.
         */

    }
}

class Animal {
    void roar() {
        System.out.println("Some random Animal is shouting");
    }
}

class Dog extends Animal {
    @Override
    void roar() {
        System.out.println("woof.., woof");
    }
}

class Cat extends Animal {

    @Override
    void roar() {
        super.roar();
        System.out.println("meow...meow");
    }
}

class Lion extends Animal {
    @Override
    void roar() {
        System.out.println("roaring Lion sound");
    }
}

class Calc {

    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}
