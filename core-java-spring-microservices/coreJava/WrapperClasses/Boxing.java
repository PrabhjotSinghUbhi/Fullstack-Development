package WrapperClasses;

import java.util.ArrayList;

// Let's talk about autoBoxing and unBoxing .
/*
 * Auto-boxing:
 * 
 *  Automatically converting a primitive type (e.g., int) into its corresponding wrapper class object (e.g., Integer). It’s like Java packing your primitive into a shiny object box for you.
 * 
 * Unboxing: 
 * 
 * Automatically converting a wrapper class object back to its primitive type. Think of it as unwrapping the box to get the raw value inside.

 */

public class Boxing {
    public static void main(String[] args) {
        // Why is it useful
        /*
         * These features were introduced in Java 5 to make life easier by reducing
         * manual conversions—super useful when working with collections or methods that
         * expect objects instead of primitives.
         */

        int primitive = 43;
        Integer nonPrimitive = primitive;

        System.out.println(primitive);// we Know it is a int
        System.out.println(nonPrimitive);
        System.out.println(nonPrimitive.getClass()); // this will print integer.

        // Practical use of auto boxing in ArrayList as it only stores Objects.
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(10); // Autoboxing: int → Integer
        System.out.println(numbers.get(0)); // Output: 10

        // Now let's talk about UnBoxing
        /*
         * Unboxing is the reverse—Java pulls the primitive out of the wrapper object.
         * It’s like opening a package to use what’s inside.
         */

        Integer a = 5;
        Integer b = 10;
        int sum = a + b; // Unboxing: Integer → int for both, then add
        System.out.println(sum); // Output: 15

        /*
         * Java doesn’t actually “convert” things magically—it uses methods from the
         * wrapper classes:
         * 
         * Autoboxing: Calls valueOf() (e.g., Integer.valueOf(42)).
         * Unboxing: Calls methods like intValue(), doubleValue(), etc.
         * 
         * Before Java 5, you had to do this manually:
         * Integer wrapper = Integer.valueOf(42); // Manual boxing
         * int primitive = wrapper.intValue(); // Manual unboxing
         */
    }
}
