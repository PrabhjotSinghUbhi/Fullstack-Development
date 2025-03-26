package Exceptions;

// Let's Talk about Errors.

/*
 * Compile time error -> easy to solve 
 ! Run time error  -> Are Exception and Handling these errors is called EXCEPTION HANDLING.
 * Logical Error -> Bugs or logical mistakes => removed during Testing
 */

/*
 * Important Points to note.
 -> try ends as it detects the first error
 -> in try block we can throw our own errors for a specific condition.
 -> our Own exception can be made and it should be a child of Exception class.
 */
public class Error {
    public static void main(String[] args) {

        // E.G. of a runtime error
        // int i = 0;
        // int j = 8 / i; // This will give error.
        /*
         * Exception in thread "main" java.lang.ArithmeticException: / by zero
         * at Exceptions.Error.main(Error.java:15)
         */
        // System.out.println(j);// an arithmetic Exception.

        // Problem is not only that the whole execution of the program is stopped that
        // is why the below statement is not executed.
        System.out.println("OOPS!");

        // ! That is where the concept of try catch comes into play

        // Now Let's try that again.
        int num1 = 0;
        int num2 = 0;

        int j = 5;

        // Now we know it might produce a runtime error.
        try {
            if (j == 5) {
                throw new PrabhjotException("Prabhjot Exception Invoked");
            }
            num2 = 43 / num1;
        } catch (ArithmeticException e) {
            System.out.println(e.getLocalizedMessage());
        } catch (Exceptions.PrabhjotException e) {
            System.out.println(e);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

        System.out.println(num2);
        System.out.println("NOW IT LOOKS GOOD :-)");

    }
}

class PrabhjotException extends Exception {
    PrabhjotException(String message) {
        System.out.println(message);
    }
}