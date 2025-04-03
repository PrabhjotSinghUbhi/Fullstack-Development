package com.prince.dsa;

import java.util.stream.Stream;

public class Runner {
	public static void main(String[] args) {
//		Stack stack = new Stack();
//
//		stack.push(23);
//		stack.push(34);
//		stack.push(93);
//		stack.push(89);
//		
//		stack.pop();
//		stack.pop();
//		stack.pop();
//		stack.pop();
//		stack.pop();
//		stack.pop();
//
//		stack.show();
		
		//Dynamic Stack.
		DynamicStack dStack = new DynamicStack();
		
		dStack.push(10);
		dStack.show();
		dStack.push(10);
		dStack.show();
		dStack.push(10);
		dStack.show();
		dStack.push(10);
		dStack.show();
		dStack.push(10);
		dStack.show();
		dStack.push(10);
		dStack.show();
		
		dStack.pop();
		dStack.pop();
		dStack.show();
	}
}
