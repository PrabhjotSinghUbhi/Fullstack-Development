package Threads;

public class ThreadSafe {
    public static void main(String[] args) throws InterruptedException {
        MyCounter counter = new MyCounter();

        Runnable obj1 = () -> {
            for (int i = 1; i <= 1000; i++) {
                counter.increment();
            }
        };

        Runnable obj2 = () -> {
            for (int i = 1; i <= 1000; i++) {
                counter.increment();
            }
        };

        Thread t1 = new Thread(obj1);
        Thread t2 = new Thread(obj2);

        t1.start();
        t2.start();

        t1.join();// makes the main wait for the threads to execute.
        t2.join();// makes the main wait for the threads to execute.

        System.out.println(counter.count);
    }
}

class MyCounter {
    int count;

    // This whole story was to introduce the synchronized keyword.
    // this will make sure only one thread is able to reach this method.
    public synchronized void increment() {
        count++;
    }
}
