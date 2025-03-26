package Threads;

public class AnonymousClassInThreads {
    public static void main(String[] args) {

        // we don't want separate A and B classes.
        Runnable obj1 = () -> {

            for (int i = 0; i < 5; i++) {
                System.out.println("hi");
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        };
        Runnable obj2 = () -> {

            for (int i = 0; i < 5; i++) {
                System.out.println("hi");
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        };

        // Now we have to make threads
        Thread t1 = new Thread(obj1);
        Thread t2 = new Thread(obj2);

        t1.start();
        t2.start();
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