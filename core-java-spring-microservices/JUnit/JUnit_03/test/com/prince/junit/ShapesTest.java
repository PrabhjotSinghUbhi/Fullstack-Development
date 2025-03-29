package com.prince.junit;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class ShapesTest {

	@Test
	void testCompute_SqaureArea() {
		Shapes shape = new Shapes();

		assertEquals(shape.computeSqaureArea(5), (double) 25);
	}

	@Test
	void testCompute_CircleArea() {
		Shapes shape = new Shapes();
		assertEquals(shape.computeCircleArea(1), (double) Math.PI, "The Calculation of Area of circle is gone wrong");
	}
}
