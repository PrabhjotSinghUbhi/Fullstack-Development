package com.prince.junit;

public class Shapes {
	public double computeSqaureArea(double side) {
		return side * side;
	}

	public double computeCircleArea(double radius) {
		return Math.PI * Math.pow(radius, 2);
//		return 0;
	}
}
