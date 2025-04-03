package com.prince.dsa;

public class DynamicStack {

	int capicity = 2;
	int[] stack = new int[capicity];
	int top = 0;

	public void push(int data) {

		if (size() == capicity) {
			expand();
		} else {
			stack[top] = data;
			top++;
		}
	}

	private void expand() {
		// TODO Auto-generated method stub
		int length = size();
		int[] newStack = new int[capicity * 2];

		System.arraycopy(stack, 0, newStack, 0, length);

		stack = newStack;

		capicity *= 2;
	}

	public void show() {

		System.out.print("The elements of stack are: ");
		for (int i : stack) {
			System.out.print(i + " ");
		}
		System.out.println();
	}

	public int pop() {

		if (top >= 0) {

		}

		top--;
		int data;
		data = stack[top];
		stack[top] = 0;

		shrink();

		return data;
	}

	private void shrink() {
		int length = size();
		if (length >= (capicity) / 4) {
			capicity = capicity / 2;
		}
		int[] newStack = new int[capicity];
		
		System.arraycopy(stack, 0, newStack, 0, length);
		stack = newStack;
		
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
