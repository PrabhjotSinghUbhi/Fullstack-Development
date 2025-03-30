package com.prince.linearsearch;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import com.prince.dsa.linearsearch.LinearSearching;

class searchTest {

	@Test
	void LinearSearchTest() {
		LinearSearching ls = new LinearSearching();
		
		int[] ans = {348737,488,-3993,38,94};
		int target = -488;
		
		assertEquals(ls.searchTarget(ans,target), 2,() -> "Couldn't find the element");
	}

}
