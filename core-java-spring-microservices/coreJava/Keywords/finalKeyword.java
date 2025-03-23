package Keywords;

//Lets talk about the final keyword. 

import java.awt.print.Book;

/*
 * The final keyword in Java is a way to say, “This is it—no changes allowed.” Depending on where you use it, it can lock down variables, methods, or entire classes. It’s like telling your code, “This is the final version, hands off!”

There are three main places you’ll see final:

* Final Variables: Can’t be reassigned after initialization (like a constant).
* Final Methods: Can’t be overridden by subclasses (locked behavior).
* Final Classes: Can’t be extended (no kids allowed).
 */

public class finalKeyword {
    public static void main(String[] args) {
        // Final Variables

        final int NUMBER = 42;
        // NUMBER = 50; // This would cause a compiler error!
        System.out.println(NUMBER); // Output: 42

        // final for Objects
        /*
         * For reference types (like objects), final means the reference can’t change,
         * but the object’s contents can still be modified.
         */

        final StringBuilder sb = new StringBuilder("Hello");
        sb.append(" World"); // This is fine
        System.out.println(sb); // Output: Hello World
        // sb = new StringBuilder("Nope"); // This would fail
    }
}

final class Books {
    final void credit() {
        System.out.println("Author : Robert Greene");
    }
}

//! final methods can't be overridden. 
//! final classes can't be inherited.

// class myBooks extends Books {

    // @Override
    // void credit() {
    //     System.out.println("Author : New Man");
    // }
// }
