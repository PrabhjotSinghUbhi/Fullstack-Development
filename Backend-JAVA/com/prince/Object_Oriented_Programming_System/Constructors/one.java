package com.prince.Object_Oriented_Programming_System.Constructors;

public class one {
    public static void main(String[] args) {
        // Constructor defines what happens when your object is created.
        Student student = new Student(0, null, 0);

        System.out.println(student.name);
        System.out.println(student.rno);
        System.out.println(student.marks);

        // When another constructor is called.
        // this makes it a default constructor.
        Student prince = new Student();
        System.out.println(prince.name);
        System.out.println(prince.rno);
        System.out.println(prince.marks);

        @SuppressWarnings("unused")
        final String name = "Prabhjot Singh";
        // name = "prince"; This would give error.

        // Final mainly works on primitive data types not the object Eg.-
        final Student fav = new Student();
        fav.name = "new Name";
        // Here i can change the value of the fav.name as objects are not primitive.

        // BUT

        // when a non primitive is final, you cannot reassign it.
        // fav = new Student();

        Student Obj;

        for (int i = 0; i < 2; i++) {
             Obj = new Student();
        }

    }

    static class Student { // Make it static
        int rno;
        String name;
        float marks;

        // How do you call a constructor from another constructor.
        Student() {
            this(69, "John Doe", 420.0f);
        }

        // Constructor
        public Student(int rno, String name, float marks) {
            this.rno = rno;
            this.name = name;
            this.marks = marks;
        }

        @Override
        protected void finalize() throws Throwable {
            System.out.println("Object is Destroyed");
        }

    }
}
