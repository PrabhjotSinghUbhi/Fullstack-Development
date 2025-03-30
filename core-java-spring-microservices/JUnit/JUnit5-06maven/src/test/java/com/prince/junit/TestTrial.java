package com.prince.junit;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class TestTrial {

	@Test
	void testCompute_SqaureArea() {

//		assertEquals(new Shapes().computeSqaureArea(5), (double) 25, "HELLO")
		assertNotEquals(new Shapes().computeSqaureArea(5), (double) 5);

	}
	
	@Test
	void test() {
//		assertTrue(false);
		
//		eg.
		String str = "Prince";
		assertTrue(str.length() == 6);
	}

}
