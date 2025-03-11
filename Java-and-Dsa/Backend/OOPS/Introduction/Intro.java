class Intro {
    public static void main(String[] args) {

        // new keyword is used to create new objects.
        // Student Prince = new Student();
        // Prince.rollNo = 24;
        // System.out.println(Prince.rollNo);
        // If values are not assigned the default values are printed.

        // System.out.println(Prince.name);
        // System.out.println(Prince.marks);
        // System.out.println(Prince.yes);

        // Constructor Student Prince = new Student() '()' is the constructor;
        // () constructors are special function that are automatically created when new
        // objects are created.

        Student one = new Student("Prabhjot Singh", 56, 95.5f, false);
        System.out.println(one.name);
        System.out.println(one.marks);
        System.out.println(one.yes);
        System.out.println(one.rollNo);

        Student two = new Student(one);
        System.out.println(two.name);
        System.out.println(two.marks);
        System.out.println(two.yes);
        System.out.println(two.rollNo);
    }

    static class Student {
        int rollNo;
        String name;
        float marks;
        boolean yes;

        Student(String name, int rno, float marks, boolean temp) {
            this.name = name;
            this.rollNo = rno;
            this.marks = marks;
            this.yes = temp;
        }

        Student(Student other) {
            this.name = other.name;
            this.rollNo = other.rollNo;
            this.marks = other.marks;
            this.yes = other.yes;
        }
    }
}
