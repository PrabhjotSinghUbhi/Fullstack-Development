package Keywords;

/*
 the throws keyword is used in a method declaration to indicate that the method might throw one or more exceptions. It informs the caller of the method that they must handle these exceptions using try-catch or propagate them further using throws.
 */

public class ThrowsKeyword {
    public static void main(String[] args){
        A obj = new A();
        try {
            obj.show();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}

class temp {
    void show() {
        System.out.println("hello");
    }
}

class A {
    void show() throws ClassNotFoundException {
        // This is checked Exception.
        Class.forName("ThrowsKeyword");
    }
}