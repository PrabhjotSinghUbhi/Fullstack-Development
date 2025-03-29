package com.prince.junit;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class ReverseStringTest {

	// Class Under Test.
	ReverseString s = new ReverseString();

	@Test
	void testReverseString_OneWord() {
//		ReverseString s = new ReverseString();

		assertEquals("avaJ", s.reverseString("Java"));
	}

	@Test
	void testReverseString_MultipleWords() {
//		ReverseString s = new ReverseString();

		assertEquals("doog si avaJ", s.reverseString("Java is good"));
	}

}
