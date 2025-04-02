package com.prince.dsa;

public class LinkedListLearn {

	// make a reference variable of head -> will have default value of null.
	Node head;

	public void insert(int value) {

		// now i need to insert the value in the linked list

		// first i need to create a new node where i can store the value and reference.

		// i need the value that is given by the user.
		// and then the reference to the next Element or Node.

		// this node is pointing towards a Node object in the heap memory.
		Node node = new Node();

		// let's assign the value to the node.
		node.data = value;

		// now i need to give the reference of the next node object to this
		// node/element. if it is the first element of the list the head should be null
		// because there is nothing to point at.
		if (head == null) {
			head = node;
		} else {
			// if there head is not null that means there are elements in the array. So,
			// what we need to do now is go to the travel to the last element i.e. the
			// element which will have the null reference so to do that.

			Node n = head;

			while (n.next != null) {
				n = n.next;
			}
			n.next = node;
		}
	}

	public void show() {
		Node n = head;

		while (n.next != null) {
			System.out.print(n.data + " -> ");
			n = n.next;
		}

		System.out.println(n.data + " -> " + "END ");
	}

	public void insertAtStart(int value) {
		Node node = new Node();
		node.data = value;
		node.next = null; // by default

		node.next = head;// since we need to add element at start.
		
		head = node;// now the head will be at this node.
	}

	public void insertAt(int index, int data) {
		Node node = new Node();
		node.data = data;
		node.next = null;// by default.

		if (index == 0) {
			insertAtStart(data);
			return;
		}

		Node n = head;// for traversing the list.

		// the for loop gets the id/address of the required element, So that we can
		// correctly place the address of the new element that is to be added.
		for (int i = 0; i < index - 1; i++) {
			n = n.next; // by i < index - 1 , n now holds the reference of the 2nd element.
		}

		// this will give the node reference of the 3rd element.
		node.next = n.next;

		// this will give the n reference of the the new node that is created.
		n.next = node;
	}

	public void delete(int index) {
		if (index == 0) {
			head = head.next;
		} else {
			Node temp = head;
			Node n1 = null;
			for (int i = 0; i < index - 1; i++) {
				temp = temp.next;
			}
			n1 = temp.next;
			temp.next = n1.next;
			System.out.println("n1 is " + n1.data + " was deleted");
		}
	}
}
