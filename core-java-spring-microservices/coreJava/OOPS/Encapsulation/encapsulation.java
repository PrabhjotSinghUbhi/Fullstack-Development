package OOPS.Encapsulation;

/*
 * Encapsulation is one of the four pillars of OOPS
 * 
 * It refers to the practice of wrapping data (variables) and code (methods) together in a single unit (a class) and restricting direct access to some of the object's components.
 */
class encapsulation {
    public static void main(String[] args) {

        System.out.println("Let's get started with encapsulation");

        Human a = new Human();

        // Now this is giving direct access to variables and we don't want that to
        // happen.

        // So this is where the concept of Getters and Setters come in.
        /*
         * a.name = "Prabh";
         * a.designation = "CEO";
         */

        a.setName("Prabh");
        String name = a.getName();
        System.out.println(name);

    }

    @Override
    public String toString() {
        return "encapsulation []";
    }
}

// Encapsulation is like putting data into specific bundles or capsules.

class Human {

    // We don't want to give direct access to this variables.
    /*
     * Remember that giving default values to the instance variables right where you
     * initialize them is not a good practice.
     * 
     * Also the instance variable's access should be kept private as we don't want
     * to give access of this variables out side this class.
     */

    private String name;
    private String designation;

    // GETTERS AND SETTERS
    /*
     * Getters and setters (public methods) are used to access and modify private
     * variables safely.
     */

    // Now lets make some Setters.
    public void setName(String name) {
        this.name = name;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    // Now Lets make some Getters
    public String getName() {
        return name;
    }

    public String getDesignation() {
        return designation;
    }

}