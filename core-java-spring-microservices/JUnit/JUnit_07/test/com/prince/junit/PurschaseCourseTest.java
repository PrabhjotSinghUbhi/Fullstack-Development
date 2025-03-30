package com.prince.junit;

import com.prince.junit.service.*;

import org.junit.jupiter.api.Test;

class PurschaseCourseTest {

	@Test
	void test() {
		PurchasedCourse pp = new PurchasedCourse();
		
		pp.proceedWithPurchase(new JUnitCourse());
		
		//Some other methods that were taught are aesertFalse, assertTrue etc.
		
	}

}
