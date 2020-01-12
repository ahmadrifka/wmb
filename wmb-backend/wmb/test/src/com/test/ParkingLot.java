package com.test;

import java.util.List;

public class ParkingLot {

	 List<String> parkingLot;

	public List<String> getParkingLot() {
		return parkingLot;
	}

	public void setParkingLot(List<String> parkingLot) {
		this.parkingLot = parkingLot;
	}
		
}

package com.test;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;


public class Test {
	
	
	private final static String filename = "/home/ahmad/Documents/commandPark.txt";
	private List<String> parkingLot;	
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		List<String> array = new ArrayList<String>();
//		array.add("20");
//		array.add("21");
//		array.add("2");
//		array.add("27");
//		
////		Collections.reverse(array);
//		Collections.sort(array);
//		array.remove(1);
//		System.out.println(array);
		
		
		try {
			BufferedReader readFile = new BufferedReader(new FileReader(filename));
			
			String strCurrentLine;
			
			List<String> containFile = new ArrayList<>();
			
			while((strCurrentLine = readFile.readLine())!= null) {
				String text = strCurrentLine.trim().split("\\s+");
				containFile.add(text);
//				System.out.println(strCurrentLine);	
			}
			Test repo = new Test();
			
			System.out.println(containFile.size());
			for (int i = 0; i < containFile.size(); i++) {
				String key = containFile.get(i).toUpperCase();
				System.out.println(key);
			
				switch (key) {
				case "CREATE_PARKING_LOT":
					
					break;
				case "PARK":
					
					repo.park(car);
					break;

				case "LEAVE":	
	
					break;

				case "STATUS":
	
					break;

				default:
					break;
				}
				
				
			}
			
			
			
			
			
			
		
			
			
			
//			repo.createParkingSlot(6);
//			repo.park("KA-01-HH-1234");
//			repo.park("KA-01-HH-9999");
//			repo.park("KA-01-BB-0001");
//			repo.park("KA-01-HH-7777");
//			repo.park("KA-01-HH-2701");
//			repo.park("KA-01-HH-3141");
//			
//			System.out.println(repo.parkingLot.size());
//			
//			leave("KA-01-HH-3141", 4);
//			
//
//			status();
//			
//			park("KA-01-P-333");
//			park("DL-12-AA-9999");
//			leave ("KA-01-HH-1234", 4);
//			System.out.println(parkingLot);
//			leave ("KA-01-BB-0001", 6);
//			leave ("DL-12-AA-9999", 2);
//			park ("KA-09-HH-0987");
//			park ("CA-09-IO-1111");
//			park ("KA-09-HH-0123");
//			status();
//			System.out.println(parkingLot);
			
			
			

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
		
		
		
	}
	
	
	
	
	public void createParkingSlot(Integer capacity) {
		this.parkingLot = new ArrayList<>(capacity);
		System.out.println("create_parking_lot "+ capacity);
	}
	
	
	public void park(String car) {
		int count = 0;
		String input = "";
		Test newPark = new Test();
		
		
		
		if(parkingLot.size() >= 6) {
			System.out.println("Sorry, parking lot is full");
		}else {
			
//			while(count <= parkingLot.size()) {
//				if(parkingLot.isEmpty()) {
//					
//					System.out.println("hat");
//		
//				}
////				
////				
//////				
//				count++;
//			}
			parkingLot.add(car);
//			newPark.park(car);
			
			System.out.println("Allocated slot number: "+ (parkingLot.indexOf(car)+1) );
			
			
			
			
			
			
		}
	}
//	
//	public void leave(String car, int time) {
//		int start = 10;
//		int timeCheck = time * 10 - start;
//		String name = "";
//		if(parkingLot.contains(car)) {
//		
//		for (int i =0; i < parkingLot.size(); i++) {
//			if(parkingLot.get(i) == car) {
//			
//				System.out.println("Registration Number "+ car + " with Slot Number "+ (parkingLot.indexOf(parkingLot.get(i))+1) +" is free with Charge " + timeCheck);
////				parkingLot.remove(i);
//				parkingLot.set(i, name);
//				
//	 
//				
//			}
//		}
//	}else {
//		System.out.println("Registration number " + car + " not found");
//	}
//		
//	
//		
//		
//		
//	}
//	
//	public void status() {
//		System.out.println("Slot No. Registration No.");
//		int count = 1;
//		for (String status : parkingLot) {
//			System.out.println(count++ +" "+ status);
//		}
//	}
//	
//	
//	

}
