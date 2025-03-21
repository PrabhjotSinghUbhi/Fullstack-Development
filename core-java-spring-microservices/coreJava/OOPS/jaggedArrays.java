package OOPS;
public class jaggedArrays {
    public static void main(String[] args) {

        int[][] arr = new int[3][]; // This is a jagged array where one of the size is not mentioned

        // But you have to give the size individually.
        arr[0] = new int[4];
        arr[1] = new int[2];
        arr[2] = new int[3];

        for (int n[] : arr) {

            for (int j : n) {
                System.out.print(j + " ");
            }
            System.out.println();
        }

    }
}
