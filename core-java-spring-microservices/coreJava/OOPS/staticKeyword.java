package OOPS;

class Mobile {

    // This are the instance variables.
    String brand;
    int price;
    static String name;

    // static variable is shared by the objects.
    static int number;

    @SuppressWarnings("static-access")
    Mobile(String b, int p, String n) {
        this.brand = b;
        this.price = p;
        this.name = n;
        Mobile.number += 1;
    }

    public void show() {
        // These are local variables as they are inside a method.
        System.out.printf("%s : %d : %s \n", this.brand, this.price, this.name);
        System.out.println(number + " that is");
    }

}

public class staticKeyword {
    public static void main(String[] args) {
        Mobile obj1 = new Mobile("Apple", 1500, "Smartphone");
        Mobile obj2 = new Mobile("Samsung", 1400, "Smartphone");

        obj2.name = "Solo";

        //Changes for both.
        obj1.show();
        obj2.show();
    }
}
