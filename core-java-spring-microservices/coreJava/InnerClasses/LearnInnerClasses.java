package InnerClasses;

/*
 * An inner class is a class defined inside another class. It’s like a tool stored inside a toolbox—tied to the outer class and often used to support its functionality. Inner classes come in handy when you want to group related logic tightly together or control access to something specific.
 */

public class LearnInnerClasses {
    public static void main(String[] args) {
        // About Member Inner Class.
        /*
         * A member inner class is like a regular member (field or method) of the outer
         * class, but it’s a full class. It’s tied to an instance of the outer class,
         * meaning you need an outer object to create an inner one.
         */

        Outer outer = new Outer();
        Outer.Inner inner = outer.new Inner(); // Note the syntax!
        inner.display(); // Output: Outer value: 10
    }
}

class Outer {
    @SuppressWarnings("FieldMayBeFinal")
    private int outerValue = 10;

    class Inner {
        void display() {
            System.out.println("Outer value: " + outerValue); // Accesses outer’s private field
        }
    }

    @SuppressWarnings("unused")
    void createInner() {
        Inner inner = new Inner();
        inner.display();
    }
}