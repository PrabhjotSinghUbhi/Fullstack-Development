package Keywords;

public class ThrowKeyword {
    public static void main(String[] args) {
        int i = 20;
        int j = 0;

        try {
            j /= i;
            // But there may ne multiple blocks of error to be handled and the try block is
            // removes by just one error
            // That is where the concept of throw keyword comes in.

            // Now if i am divide the number and get 0 BUT I DON'T Want 0. so we can throw
            // the error by ourself.

            if (j == 0) {
                throw new ArithmeticException("trust me you don't wanna do that."); // we can even pass the messages in
                                                                                    // the constructor.
            }
        } catch (ArithmeticException e) {
            // we can handle the error.
            // in this example if someone is trying to divide by zero we can divide it by
            // one and show it as a default value.

            j /= 1;
            System.out.println(j);
            System.out.println("That is the default value." + e);
        }
    }
}
