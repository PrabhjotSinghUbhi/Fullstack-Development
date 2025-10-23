
public class Temp {

    public static void main(String[] args) throws ClassNotFoundException {
        Class.forName("Mobile");
    }
}

class Mobile {

    String brand;
    int year;
    static String name;

    static {
        name = "";
        System.out.println("static called.");
    }

    public Mobile() {
        System.out.println("Constructor called.");
        brand = "";
        year = 1998;
    }

    void show() {
        System.out.println(name + " : " + brand + " : " + year);
    }
}
