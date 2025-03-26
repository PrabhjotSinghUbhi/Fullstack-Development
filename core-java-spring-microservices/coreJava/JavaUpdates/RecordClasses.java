package JavaUpdates;

public class RecordClasses {
    public static void main(String[] args) {

        var a1 = new Alien(1, "Jaddu");
        var a2 = new Alien(1, "Jaddu");

        // System.out.print(a1.getName()); // Now this will not work        
        System.out.println(a1.name());
        System.out.println(a1);
        System.out.println(a1.equals(a2));
    }
}

// class Alien {
// final private String name;
// final private int id;

// public Alien(int id, String name) {
// this.id = id;
// this.name = name;
// }

// @Override
// public int hashCode() {
// final int prime = 31;
// int result = 1;
// result = prime * result + ((name == null) ? 0 : name.hashCode());
// result = prime * result + id;
// return result;
// }

// @Override
// public boolean equals(Object obj) {
// if (this == obj)
// return true;
// if (obj == null)
// return false;
// if (getClass() != obj.getClass())
// return false;
// Alien other = (Alien) obj;
// if (name == null) {
// if (other.name != null)
// return false;
// } else if (!name.equals(other.name))
// return false;
// if (id != other.id)
// return false;
// return true;
// }

// @Override
// public String toString() {
// return "Alien [name=" + name + ", id=" + id + "]";
// }

// }

//

// it doesn't make sense to write these many lines of code for a class that just
// stores two variables

// Thats where the concept of Record Classes Come In.
record Alien(int id, String name) {
}// 😂😂🥲🥲 Just One line and all the code above.

//! All the variables here are private and final because it is immutable data.
