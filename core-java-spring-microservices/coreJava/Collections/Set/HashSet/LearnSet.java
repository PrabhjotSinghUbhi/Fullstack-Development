package Collections.Set.HashSet;

import java.util.HashSet;
import java.util.Set;

public class LearnSet {
    public static void main(String[] args) {
        Set<Integer> nums = new HashSet<>();

        nums.add(3);
        nums.add(1);
        nums.add(5);
        nums.add(2);
        nums.add(4);

        for (Object n : nums) {
            System.out.println(n + " ");
        }

    }
}
