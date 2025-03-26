package Collections.Sorting;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class SortingLearn {
    public static void main(String[] args) {
        List<Integer> arr = new ArrayList<>();
        {
            arr.add(91);
            arr.add(53);
            arr.add(34);
            arr.add(07);
            arr.add(25);
            arr.add(10);
            arr.add(42);
            arr.add(16);
        }

        Comparator<Integer> com = (Integer i, Integer j) -> {
            if (i % 10 < j % 10)// Sorting on based of last digit.
                return 1;
            else
                return -1;
        };

        // Collections and collection is different.
        Collections.sort(arr, com);
        System.out.println(arr);

        List<Students> studs = new ArrayList<>();
        studs.add(new Students(23, "Prince"));
        studs.add(new Students(13, "Prabhjyot"));
        studs.add(new Students(19, "Prabhjot Singh"));

        // System.out.println(studs);

        // Before Sorting.
        for (Students s : studs) {
            System.out.println(s);
        }

        // Comparator<Students> ageSort = (i, j) -> {
        // // if (i.age > j.age)
        // // return 1;
        // // else
        // // return -1;
        // return i.age > j.age ? 1 : -1;
        // };

        // let's Sort them based on age.

        // Collections.sort(studs, ageSort);// To implement nature Sorting.
        Collections.sort(studs);// To implement nature Sorting.

        System.out.println("---------------------------------------------");

        // After Sorting

        for (Students s : studs) {
            System.out.println(s);
        }
    }
}

class Students implements Comparable<Students> {
    int age;
    String name;

    public Students(int age, String name) {
        this.age = age;
        this.name = name;
    }

    @Override
    public int compareTo(Students that) {
        return this.age > that.age ? 1 : -1;
    }

    @Override
    public String toString() {
        return "Students [age=" + age + ", name=" + name + "]";
    }

}