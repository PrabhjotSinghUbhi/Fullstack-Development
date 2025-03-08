import java.util.Arrays;

public class StringMethods {
    public static void main(String[] args) {
        String s1 = "   Hello    ";

        // Some Basic Methods of Strings.
        /*
         * s1.length()
         * s1.charAt(__index__)
         * s1.concat(__str__)
         * s1.toUpperCase()
         * s1.toLowerCase()
         * s1.trim()
         * s1.substring(__start__,__end__)
         * s1.replace(__old__,__new__)
         * s1.equals(str)
         * s1.split(__regex__)
         * s1.equalsIgnoreCase(str)
         */

        String chars = "a, b, c";
        String[] abc = chars.split(",");

        System.out.println(Arrays.toString(abc));

        String temp  = s1.trim();
        System.out.println(temp);

        String newString = "Drama";
        System.out.println(Arrays.toString(newString.toCharArray()));

        Integer a = 899;
        a.
    }
}
