package Collections.List.ArrayList;

import java.util.ArrayList;
import java.util.List;

public class LearnArrayList {
    public static void main(String[] args) {
        // Collection<Integer> nums = new ArrayList<>();
        // This <Integers> are Generics.
        
        List<Integer> nums = new ArrayList<>();
        // This <Integers> are Generics.
        nums.add(43);
        nums.add(3);
        System.out.println( nums.size());

        System.out.println(nums.get(1));

        for (int i : nums) {
            System.out.println(i + " ");
        }

    }
}
