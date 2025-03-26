package Collections.Set.TreeSet;

import java.util.Set;
import java.util.TreeSet;

public class LearnTreeSet {
    public static void main(String[] args) {
        Set<Integer> nums = new TreeSet<>();

        nums.add(32);
        nums.add(12);
        nums.add(59);
        nums.add(27);
        nums.add(49);

        for (Object n : nums) {
            System.out.println(n + " ");
        }

    }
}
