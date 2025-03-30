package com.prince.junit;

public class SpringCourse implements Course {
	@Override
	public boolean buyCourse() {
		// TODO Auto-generated method stub
		System.out.println("Spring Course Purchased");
		return true;
	}
}
