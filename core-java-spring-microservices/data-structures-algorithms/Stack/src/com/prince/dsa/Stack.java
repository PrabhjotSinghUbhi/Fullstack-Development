package com.prince.dsa;

public class Stack {

	int[] stack = new int[5];
	int top = 0;

	public void push(int data) {

		if (top >= 5) {
			System.out.println("Stack is full");
			return;
		}

		stack[top] = data;
		top++;

	}

	public void show() {

		System.out.print("The elements of stack are: ");
		for (int i : stack) {
			System.out.print(i + " ");
		}
	}

	public int pop() {
		
		if(top >= 0) {
			
		}
		
		top--;
		int data;
		data = stack[top];
		stack[top] = 0;

		return data;
	}

	public int peek() {

		if (top <= 0) {
			System.out.println("Stack is empty");
			return -1;
		}

		int data;
		data = stack[top - 1];
		return data;
	}

	public int size() {
		return top;
	}

	public boolean isEmpty() {
		return size() <= 0;
	}
}
