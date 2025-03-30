package com.prince.dsa;

public class MergeSort {
	public void sort(int[] arr, int l, int r) {

		if (l < r) {
			int mid = (l + r) / 2;

			sort(arr, l, mid);
			sort(arr, mid + 1, r);

			merge(arr, l, mid, r);
		}
	}

	private void merge(int[] arr, int l, int mid, int r) {
		// TODO Auto-generated method stub.

		int s1 = mid - l + 1;
		int s2 = r - mid;

		int[] lArr = new int[s1];
		int[] rArr = new int[s2];

		for (int i = 0; i < s1; i++) {
			lArr[i] = arr[l + i];
		}

		// ✅ Copy elements safely
//        System.arraycopy(arr, l, lArr, 0, s1);
//        System.arraycopy(arr, mid + 1, rArr, 0, s2);

		for (int j = 0; j < s2; j++) {
			rArr[j] = arr[mid + 1 + j];
		}

		int i = 0;
		int j = 0;

		int k = l;

		while (i < s1 && j < s2) {
			if (lArr[i] <= rArr[j]) {
				arr[k] = lArr[i];
				i++;
			} else {
				arr[k] = rArr[j];
				j++;
			}
			k++;
		}

		while (i < s1) {
			arr[k] = lArr[i];
			i++;
			k++;
		}

		while (j < s2) {
			arr[k] = rArr[j];
			j++;
			k++;
		}

	}
}
