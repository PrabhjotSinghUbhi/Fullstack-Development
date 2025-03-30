package com.prince.dsa;

public class BinarySearch {
	public static void main(String[] args) {
		int[] arr = { 1, 2, 3, 4, 5 };
		int target = 3;

		Search bs = new Search(arr, target);

		int result = bs.bsSearch(arr, target);
		System.out.println(result);
	}
}

class Search {
	
	private final int target;
	private final int[] arr;

	public Search(int[] arr, int target) {
		this.arr = arr;
		this.target = target;
	}

	public int bsSearch(int[] arr, int target) {
		int i = 0;
		int j = arr.length - 1;

		while (i <= j) {

			int mid = i + j / 2;

			if (arr[mid] == target) {
				return mid;
			}

			if (arr[mid] > target) {
				j = mid - 1;
			} else {
				i = mid + 1;
			}
		}

		return -1;
	}

	public int getTarget() {
		return target;
	}

	public int[] getArr() {
		return arr;
	}
}