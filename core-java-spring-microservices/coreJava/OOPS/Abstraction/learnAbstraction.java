package OOPS.Abstraction;

// Lets talk about Abstraction.
/*
 *Abstraction is the art of hiding the messy details and showing only what’s essential. Think of it like a car’s dashboard: you see the speedometer and gas gauge, but you don’t need to know how the engine’s pistons are firing or how fuel injection works. Abstraction lets you focus on what something does, not how it does it. 
 */

public class learnAbstraction {
    public static void main(String[] args) {
        // Abstraction in Java
        /*
         * In Java, abstraction is achieved through two main tools:
         * 
         * Abstract Classes:
         * 
         * A partial blueprint that can’t be instantiated (Can't make a object out of a
         * Abstract class) but can include some implementation.
         * 
         * Interfaces:
         * 
         * A pure contract with no implementation (at least until Java 8
         * added default methods).
         */

        // Can't make a instance (object) out of a abstract class.
        // Animal pet = new Animal(); //ERROR: Animal is abstract; cannot be
        // instantiated.

        Animal pet = new Dog();
        pet.sound();
        pet.sleep();
    }
}

// ! Abstract Classes
/*
 * An abstract class is like a half-finished recipe—you get the main steps, but
 * some parts are left for you to fill in. It can have:
 * 
 * Abstract methods:
 * 
 * No body, just a signature (you must implement these in
 * subclasses).
 * 
 * Concrete methods:
 * 
 * Fully implemented methods that subclasses inherit.
 */

// ! Abstract Methods can only be declared in Abstract Classes.
abstract class Animal {

    // Abstract method (no body)
    abstract void sound();

    // Concrete method
    void sleep() {
        System.out.println("Zzz...");
    }
}

// ! Classes that inherit from Abstract classes MUST define/override the
class Dog extends Animal {

    @Override
    void sound() {
        System.out.println("woof Woof!");
    }
}