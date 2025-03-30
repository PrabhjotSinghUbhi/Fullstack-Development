package com.prince.dsa;

import java.util.Arrays;

public class BubbleSort {
	public int[] sort(int[] arr) {
		for (int i = 0; i < arr.length; i++) {
			for (int j = i + 1; j < arr.length; j++) {
				
				System.out.println(Arrays.toString(arr));
				
				if (arr[i] > arr[j]) {
					int temp = arr[i];
					arr[i] = arr[j];
					arr[j] = temp;
				}
			}
		}
		
		
		System.out.println("Finally Sorted Arrays is: "+Arrays.toString(arr));
		return arr;
	}
}
