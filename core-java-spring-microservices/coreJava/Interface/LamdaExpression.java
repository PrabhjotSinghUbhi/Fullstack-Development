package Interface;

public class LamdaExpression {
    public static void main(String[] args) {
        // What we would have done without the lamda Expression.
        // ! Lamda expression only works on Functional Interfaces.args

        // A obj = new A() {
        // @Override
        // public void display() {
        // System.out.println("Hi to unit testing.");
        // }
        // };

        // But same thing can be written as this using lamda Expression.
        A obj = (i) -> {
            System.out.println("hi to java " + i);
            System.out.println("hi to unit testing " + i);
        };

        // if there are more statement to add we can simply open a scope.
        obj.display(34);

        B obj2 = (num1, num2) -> (num1 + num2);

        System.out.println(obj2.add(5, 4));

    }
}

@FunctionalInterface
interface A {
    void display(int i);
}

// Now Try to create a add method in interfaces.
@FunctionalInterface
interface B {
    int add(int i, int b);
}