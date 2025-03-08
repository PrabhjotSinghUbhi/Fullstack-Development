
class Sorting {
    public static void main(String[] args) {
        int[] arr = { 5, 4, 3, 2, 1 };
        InsertionSort(arr, arr.length);
    }

    static void InsertionSort(int[] arr, int length) {  
        for (int i = 0; i < length; i++) {
            int key = arr[i];

            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }

    }
}