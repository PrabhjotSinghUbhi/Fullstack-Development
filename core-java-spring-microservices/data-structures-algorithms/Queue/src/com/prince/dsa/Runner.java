package com.prince.dsa;

public class Runner {
	public static void main(String[] args) {
		LearnQueue q = new LearnQueue();
		q.enQueue(1);
		q.enQueue(2);
		q.enQueue(3);
		q.enQueue(4);
		q.enQueue(5);
		
		q.deQueue();
		q.deQueue();
		
		q.show();
	}
}
