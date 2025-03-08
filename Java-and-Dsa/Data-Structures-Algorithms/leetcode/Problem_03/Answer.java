
/* 
 * problem no = 66
 * problem name = plus one
 * link = https://leetcode.com/problems/plus-one/
*/

import java.util.Arrays;

class Answer {
    public static void main(String[] args) {
        int[] digit = { 6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3 };
        for (int i = digit.length - 1; i >= 0; i--) {
            if (digit[i] < 9) {
                digit[i]++;
                System.out.println(Arrays.toString(digit));
                return;
            }
            digit[i] = 0;
        }
        int[] newArray = new int[digit.length];
        newArray[0] = 1;
        System.out.println(Arrays.toString(newArray));
    }
}