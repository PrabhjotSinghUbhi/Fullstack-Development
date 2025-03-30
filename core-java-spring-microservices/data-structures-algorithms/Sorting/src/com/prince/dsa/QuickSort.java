package com.prince.dsa;

public class QuickSort {
	void sort(int[] arr, int low, int high) {

		if (low < high) {
			int pi = partition(arr, low, high);

			sort(arr, low, pi - 1);
			sort(arr, pi + 1, high);
		}
	}

	private int partition(int[] arr, int low, int high) {
		// TODO Auto-generated method stub
		int pi = arr[high];
		int i = low - 1;

		for (int j = low; j < high; j++) {
			if (arr[j] < pi) {
				i++;
				int temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
		
		int temp = arr[i + 1];
		arr[i + 1] = arr[high];
		arr[high] = temp;

		return i + 1;
	}
}
