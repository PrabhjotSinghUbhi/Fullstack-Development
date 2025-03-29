package com.prince.junit;

public class ReverseString {
	
	//Java = avaJ
	public String reverseString(String str) {
		char[] ans = str.toCharArray();
		int i = 0;
		int j = str.length() - 1;

		while (i < j) {
			
			//Swapping characters at left and right using 2 pointers i and j.
			char temp = ans[i];
			ans[i] = ans[j];
			ans[j] = temp;
			
			//Move the pointer closer to each other.
			i++;
			j--;
		}

		return new String(ans);
	}
}
