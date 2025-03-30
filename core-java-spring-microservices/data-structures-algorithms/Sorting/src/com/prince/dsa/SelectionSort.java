package com.prince.dsa;

import java.util.Arrays;

public class SelectionSort {
	public int[] sort(int[] arr) {
		for (int i = 0; i < arr.length; i++) {
			int minIndex = i;
			for (int j = i + 1; j < arr.length; j++) {
				if (arr[minIndex] > arr[j]) {
					minIndex = j;
				}
			}

//			for (int k : arr) {
//				System.out.print(k + " ");
//			}
			
			System.out.println(Arrays.toString(arr));

			int temp = arr[minIndex];
			arr[minIndex] = arr[i];
			arr[i] = temp;

			System.out.println();
		}
		System.out.println(Arrays.toString(arr));
		return arr;

	}
}
