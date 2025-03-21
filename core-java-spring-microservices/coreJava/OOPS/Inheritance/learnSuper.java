package OOPS.Inheritance;

/*
 * Super Keyword
 * Key Rules to Remember
    super() must be the first statement in a constructor if you use it.
    You can’t use super in a static context (like static methods)—it’s tied to instances, not the class itself.
    If you don’t call super() and the parent has no no-arg constructor, the compiler will complain.
*/

public class learnSuper {
    public static void main(String[] args) {
        Parent a = new Parent();
        Child b = new Child();
        /*
         * Output will be :-
         * Parent Constructor called
         * Child Constructor called
         * 
         * But why is Parent Constructor is called ??
         * => When a child class is created, you often want to initialize stuff from the
         * parent class too. You use super() to call the parent’s constructor.
         * 
         * => Super is there regardless if you put it there ot not.
         * 
         * Analogy => this has to be the first line in the child’s constructor—think of
         * it as a rule of inheritance etiquette: “Greet your parents before you start
         * talking about yourself.
         */
        a.show();
        b.show();
    }
}

class Parent {

    // Default constructor of Parent class.
    public Parent() {
        // super();
        System.out.println("Parent Constructor called");
    }

    // methods of parent can also be accessed by child class.
    public void show() {
        System.out.println("THIS is PARENT");
    }
}

class Child extends Parent {
    // Default constructor of child class.
    public Child() {
        super(); // this keyword will be here regardless if you put it here or not.
        System.out.println("Child Constructor called");
    }

    @Override
    public void show() {
        // super.show();
        System.out.println("THIS IS CHILD");
    }
}