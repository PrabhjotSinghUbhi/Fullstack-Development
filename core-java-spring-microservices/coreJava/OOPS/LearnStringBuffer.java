package OOPS;

public class LearnStringBuffer {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer("prince");

        System.out.println(sb.capacity());
        System.out.println(sb.length());

        /*
         * Difference between StringBuilder and StringBuffer.
         * 
         * StringBuilder is thread Safe but StringBuffer is not.
         */

    }
}
