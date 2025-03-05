/*
 * problem no - 1431.
 * name - Kids With the Greatest Number of Candies.
 * link - https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/
 */

import java.util.ArrayList;
// import java.util.Arrays;

public class Answer {
    public static void main(String[] args) {
        int[] candies = { 2, 3, 5, 1, 3 };
        int extraCandies = 3;

        System.out.println(kidsWithCandies(candies, extraCandies));
    }

    private static ArrayList<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        int temp = Integer.MIN_VALUE;
        ArrayList<Boolean> list = new ArrayList<>();
        // Find the max value.
        for (int i = 0; i < candies.length; i++) {
            temp = Math.max(temp, candies[i]);
        }
        // Now temp should have the largest Value.
        for (int i = 0; i < candies.length; i++) {
            int totalCandies = candies[i] + extraCandies;
            if (totalCandies >= temp) {
                list.add(true);
            } else {
                list.add(false);
            }
        }

        return list;
    }
}
