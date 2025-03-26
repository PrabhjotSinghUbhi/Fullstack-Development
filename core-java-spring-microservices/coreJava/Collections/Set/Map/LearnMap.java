package Collections.Set.Map;

import java.util.HashMap;
import java.util.Map;

public class LearnMap {
    public static void main(String[] args) {
        Map<String, Integer> nums = new HashMap<>();

        nums.put("Prabhjot Singh", 98);
        nums.put("Gurkirat", 98);

        System.out.println(nums.get("Prabhjot Singh"));

        System.out.println(nums.keySet());

        for (String s : nums.keySet()) {
            System.out.println(s + " : " + nums.get(s));
        }

    }
}
