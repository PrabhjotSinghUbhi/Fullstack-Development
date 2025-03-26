package Threads;

import java.util.Collections;

// Let's talk about Threads in java.
/*
 * A thread is used to run a task and java supports multi-threading i.e. multiple threads can be executed simultaneously.
 * A thread is smallest unit you can work with. 
 */
/*
 * But extending to the Thread class is not a good Idea instead we can use the Runable Interface, it also contains 
 */

public class InnerLearnThreads {
    public static void main(String[] args) {
        // A obj1 = new A();
        // B obj2 = new B();

        // We know that we can make a Reference of Interface to the Object of another
        // class.

        Runnable obj1 = new A();
        Runnable obj2 = new B();

        // Now we have to make threads
        Thread t1 = new Thread(obj1);
        Thread t2 = new Thread(obj2);

        t1.start();
        t2.start();

        // obj1.show(); show won't word here in a thread start method is used to
        // execute.
        // obj2.show();

        // obj1.start();// Start() calls the run() method.
        // obj2.start();

        // We can set priory of the tasks too.
        // obj1.setPriority(Thread.MAX_PRIORITY);// the scale is from 1 to 10 low
        // priority to high priority.
        // System.out.println(obj1.getPriority() + " " + obj2.getPriority());
    }
}

// ! Thread must have a run method which the start method calls.
class A implements Runnable {
    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println("hi");
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

// ! Thread must have a run method which the start method calls.
class B implements Runnable {
    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println("hello");
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}