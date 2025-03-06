/*
 * prb no = 26.
 * name - Remove Duplicates from the sorted array.
 * link - https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 */

import java.util.Arrays;

public class answer {
    public static void main(String[] args) {
        int[] nums = {}; // Input array
        int[] expectedNums = {}; // The expected answer with correct length

        int k = removeDuplicates(nums); // Calls your implementation

        assert k == expectedNums.length;
        for (int i = 0; i < k; i++) {
            assert nums[i] == expectedNums[i];
        }
    }

    private static int removeDuplicates(int[] nums) {
        int ans = 0;
        int[] arr = new int[5];
        int[] arr2 = new int[3];

        arr2 = arr;

        System.out.println(Arrays.toString(arr2));

        return ans;
    }
}
