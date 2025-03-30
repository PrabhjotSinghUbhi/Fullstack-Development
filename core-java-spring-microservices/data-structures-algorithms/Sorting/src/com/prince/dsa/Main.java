package com.prince.dsa;

import java.util.Arrays;

public class Main {
	public static void main(String[] args) {

//		new BubbleSort().sort(arr);

//		new SelectionSort().sort(arr);

//		int[] ans = new InsertionSort().sort(arr);

		int[] arr = { 5, 4, 3, 2, 1 };

//		new QuickSort().sort(arr, 0, arr.length - 1);

		new MergeSort().sort(arr, 0, arr.length - 1);
		System.out.println(Arrays.toString(arr));

	}
}
