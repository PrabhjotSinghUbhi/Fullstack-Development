package com.prince.dsa;

public class Main {
	public static void main(String[] args) {
		LinkedListLearn list = new LinkedListLearn();

		list.insert(69);
		list.insert(22);
		list.insert(92);
		list.insertAtStart(100);
		list.insertAt(0, 101);
		list.insert(85);
		list.insert(42);
		
		list.delete(1);

		list.show();

	}
}