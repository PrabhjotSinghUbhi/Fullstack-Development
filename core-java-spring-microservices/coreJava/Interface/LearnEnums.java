package Interface;

public class LearnEnums {
    public static void main(String[] args) {
        Status s = Status.Pending;
        System.out.println(s);

        // ordinal method can be used to get the index.args
        System.out.println(s.ordinal());

        // Let's try to print all Enums.
        Status[] ss = Status.values();

        for (Status i : ss) {
            System.out.println(i + " : " + i.ordinal());
        }
    }
}

enum Status {
    Running, Failed, Pending, Success;
}