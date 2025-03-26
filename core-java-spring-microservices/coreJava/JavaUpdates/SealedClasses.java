package JavaUpdates;

public class SealedClasses {
    public static void main(String[] args) {

    }
}

// Sealed classes are useful when you don't want to let a class inherit the one
// class for e.g => I wan't D to inherit A but i want to make it inherit B and
// C.

// Rules for Sealed classes
/*
 * Every class that is inheriting the Sealed class must be one of three things
 * final , sealed or non-sealed.
 * and it must inherit the A class.
 * permit keyword can be used for controlling the access.
 */

sealed class A permits B, C {

}

non-sealed class B extends A {

}

final class C extends A {

}

// final class D extends A{ this will give error.

// }