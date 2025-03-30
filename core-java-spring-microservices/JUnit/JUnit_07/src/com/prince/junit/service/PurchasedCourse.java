package com.prince.junit.service;

import com.prince.junit.*;

public class PurchasedCourse  {
	private Course course;
	
	//The unit that needs to be tested.
	public boolean proceedWithPurchase(Course course) {
		return course.buyCourse();
	}
}
