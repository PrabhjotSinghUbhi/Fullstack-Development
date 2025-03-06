/*
 * Sliding window offers better time and space complexity than our regular for loops
 * It has two types 
    * Fixed where window size is fixed.
    * Where window size is not fixed.
 */

public class answer {
    public static void main(String[] args) {
        // Maximum Sub array with window 4.
        int[] arr = { 3, 8, 2, 5, 7, 6, 12 };
        int window = 4;
        // should return 30
        System.out.println(Window(arr, window));
    }

    private static int Window(int[] arr, int window) {
        int maxx = 0;

        for (int i = 0; i < window; i++) {
            maxx += arr[i];
        }
        System.out.println(maxx);

        int temp = maxx;

        for (int i = 0; i < window - 1; i++) {
            temp +=   arr[window + i] - arr[i];
            if (temp > maxx) {
                maxx = temp;
            }
        }

        // first lets define two variable for comparison.
        return maxx;
    }
}
