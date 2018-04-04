package com.cg.springwithangular.staticdb;

import java.util.ArrayList;
import java.util.List;

import com.cg.springwithangular.beans.Movies;

public class MovieDb {
private static List<Movies> movList=new ArrayList<Movies>();
	
	static{
		
		//movList.add(new Movie(1001,"Rahul",5000,"Java"));
		//movList.add(new Employee(1002,"Vikash",6000,"Java"));
		//movList.add(new Employee(1003,"Shital",7000,".Net"));
		//movList.add(new Employee(1004,"Mainframe",9000,"Venna"));
		//movList.add(new Employee(1005,"Sachin",8000,"OraApps"));
	}

	public static List<Movies> getEmpList() {
		
		return movList;
	}

	public static void setCountryList(List<Movies> movList) 
	{
		
		MovieDb.movList = movList;
	}
}
