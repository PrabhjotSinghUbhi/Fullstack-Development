import java.util.Arrays;

public class Sorting {
    public static void main(String[] args) {
        int[] arr = { 5, 4, 3, 2, 1 };
        SelectionSort(arr, arr.length);
    }

    private static void SelectionSort(int[] arr, int length) {
        for (int i = 0; i < arr.length; i++) {
            int minIndex = i;
            for (int j = i+1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            swap(arr,i,minIndex);
        }
        System.out.println(Arrays.toString(arr));
    }

    static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
