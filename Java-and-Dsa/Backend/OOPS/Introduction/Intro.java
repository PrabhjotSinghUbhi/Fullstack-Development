class Intro {
    public static void main(String[] args) {

        // new keyword is used to create new objects.
        Student Prince = new Student();
        Prince.rollNo = 24;
        System.out.println(Prince.rollNo);
        // If values are not assigned the default values are printed.

        System.out.println(Prince.name);
        System.out.println(Prince.marks);
        System.out.println(Prince.yes);

        //Constructor Student Prince = new Student()  '()' is the constructor;
        //() constructors are special function that are automatically created when new objects are created.

    }

    static class Student {
        int rollNo;
        String name;
        float marks;
        boolean yes;
    }
}