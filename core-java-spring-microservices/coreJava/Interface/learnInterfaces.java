package Interface;

/*
 * Let's Talk about Interfaces.

 In abstract classes we can have abstract methods and non-abstract methods also for e.g. 
    abstract class Abc{
        public abstract void aMethod();
        public abstract void bMethod();
        public void void cMethod(){
            System.out.print("Hello Interfaces");
        };

        But if the abstract classes contains only Abstract Methods there is a better way to use it 
        That is where the CONCEPT OF INTERFACES COMES.

        this class :
            abstract class Abc {
        public abstract void aMethod();
        public abstract void bMethod();
        }
        can be written as :
        Interface Abc
        {
        void aMethod(); //there is no need to write "public abstract" because it is already there.
        void bMethod();
        }  

        ! Interface is Class but it cannot be instantiated.
        ! Interface's variables are by default final and static.
        ! all Interface's methods must be defined even the inherited ones.
 */

public class learnInterfaces {
    public static void main(String[] args) {
        // let's we join a company that provides us laptop in stating.
        // what are we going to do with that laptop ??
        // coding right??
        // So lets make a Laptop Object.
        Laptop lap = new Laptop();

        // lap.code(lap);// this is working fine what if i want a desktop and i believe
        // that i desktop
        // would be faster for me

        Desktop dk = new Desktop();

        // dk.code(dk); // this will work but don't that coding can be done by laptop to
        // so shouldn't
        // the code method also accept the desktop obj to

        // lap.code(dk);// BUT this will give me error.

        // One way to fix such kind of problem is using a abstract class computer
        // Logically both the laptop and desktop fall under the category of computer
        // right.

        // SO By polymorphism.
        Computer lap2 = new Laptop();
        Computer desk = new Desktop();

        lap2.code();
        desk.code();

    }
}

interface Computer {
    void code();
}
// abstract class Computer {
// abstract void code();
// }

class Developer {
    public void devApp(Computer obj) {
        obj.code();
    }
}

class Laptop implements Computer {

    // What do you need for coding ??
    // A laptop
    public void code() {
        System.out.println("Code Compile Run .......");
    }
}

class Desktop implements Computer {
    public void code() {
        System.out.println("Code Compile Run .......:: faster...........");
    }
}