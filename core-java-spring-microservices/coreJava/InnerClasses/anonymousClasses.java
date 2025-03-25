package InnerClasses;

public class anonymousClasses {
    public static void main(String[] args) {
        A a = new A() {
            void show() {
                System.out.println("In Anonymous Class \n Anonymous class also works on Abstract classes");
            }
        };
        a.show();
    }
}

abstract class A {
    void show() {
        System.out.println("In class A");
    }
}