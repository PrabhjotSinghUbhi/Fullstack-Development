package Threads;

// Let's talk about Threads in java.
/*
 * A thread is used to run a task and java supports multi-threading i.e. multiple threads can be executed simultaneously.
 * A thread is smallest unit you can work with. 
 */
/*public class InnerLearnThreads {

    
} */

public class LearnThreads {
    public static void main(String[] args) {
        A obj1 = new A();
        B obj2 = new B();

        // obj1.show(); show won't word here in a thread start method is used to
        // execute.
        // obj2.show();

        obj1.start();// Start() calls the run() method.
        obj2.start();

        // We can set priory of the tasks too.
        // obj1.setPriority(Thread.MAX_PRIORITY);// the scale is from 1 to 10 low
        // priority to high priority.
        // System.out.println(obj1.getPriority() + " " + obj2.getPriority());
    }
}

// ! Thread must have a run method which the start method calls.
class A extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            System.out.println("hi");
            try {
                sleep(10);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

// ! Thread must have a run method which the start method calls.
class B extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            System.out.println("hello");
            try {
                sleep(10);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}