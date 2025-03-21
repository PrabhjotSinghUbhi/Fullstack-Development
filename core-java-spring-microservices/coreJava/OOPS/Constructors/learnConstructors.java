package OOPS.Constructors;

/*
 * A constructor is a special method in Java used to initialize objects. It is automatically called when an object of a class is created.
 */
/*
 * KEY FEATURES
    ✔ Same name as the class.
    ✔  No return type (not even void).
    ✔ Used to initialize object properties.
    ✔ Automatically invoked when an object is created.
 */

public class learnConstructors {
    public static void main(String[] args) {
        Car car1 = new Car("BMW", 180); // Original object
        Car car2 = new Car(car1); // Copying car1 to car2

        System.out.println("Original Car:");
        car1.display();

        System.out.println("\nCopied Car:");
        car2.display();

        // To demonstrate the working of this keyword
        Books myBook = new Books();
        System.out.println(myBook.bookName);
        System.out.println(myBook.shelfNo);
    }
}

class Car {
    String brand;
    int speed;

    // Default Constructor
    public Car() {
        System.out.println("Default Constructor Called!");
        brand = "Unknown";
        speed = 0;
    }

    // Parameterized Constructor.

    public Car(String brand, int speed) {
        this.brand = brand;
        this.speed = speed;
    }

    // Copy Constructor.
    public Car(Car newCar) {
        this.brand = newCar.brand;
        this.speed = newCar.speed;
    }

    public void display() {
        System.out.println("Brand: " + brand);
        System.out.println("Speed: " + speed);
    }
}

class Books {
    String bookName;
    int shelfNo;

    public Books(String bookName, int shelfNo) {
        this.bookName = bookName;
        this.shelfNo = shelfNo;
    }

    public Books() {
        // This 'this' keyword is calling another constructor.
        this("Art of War", 34);
    }
}