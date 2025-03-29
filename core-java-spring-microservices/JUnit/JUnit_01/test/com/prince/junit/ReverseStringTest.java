package com.prince.junit;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class ReverseStringTest {

	// Default behavior of the test() method is success
	// in JUnit-5 it need not to be Public, private or protected it can be default also.
	// it only checks for Failures.

	@Test
	void test() {
		assertEquals(new ReverseString().reverseString("Java"), "avaJ");
		assertEquals(new ReverseString().reverseString("Alien"), "neilA");
	}

}
