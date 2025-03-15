public class wrapperExample {
    public static void main(String[] args) {
        int a = 5;
        int b = 10;
        swap(a, b);

        System.out.println("a is : " + a + " and b is: " + b);

        Integer num1 = 56;
        Integer num2 = 65;

        swap(num1, num2);

        System.out.println("Num 1 is : " + num1 + " and Num 2 is: " + num2);

    }

    static void swap(int a, int b) {
        int temp = a;
        a = b;
        b = temp;
    }
}
