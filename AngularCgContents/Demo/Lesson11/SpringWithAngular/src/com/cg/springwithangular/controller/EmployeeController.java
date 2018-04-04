package com.cg.springwithangular.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



import com.cg.springwithangular.beans.Employee;
import com.cg.springwithangular.service.IEmployeeService;

/**
 * 
 * @author rvikash REST Controller with different HTTP methods as
 *         GET,POST,DELETE and their respective URL mappings class level
 *         request mapping as "countries"
 *         return type is JSON
 */

@RestController
public class EmployeeController {
	@Autowired
	IEmployeeService empservive;
	
	/**
	 * Method fetches all country details supporting HTTP GET method
	 * 
	 * @param  MODEL
	 * @return String - List Employee JSON
	 */
	@RequestMapping(value = "/employee",method = RequestMethod.GET,headers="Accept=application/json")
	public List<Employee> getAllCounties(Model model) {
		
		
		return empservive.getAllEmployee();
		
	}
	
	/**
	 * Method creates a spring form to create a country
	 * 
	 * @param id name population
	 * @return List-format JSON 
	 */
	
	/*@RequestMapping(value = "/countries/create/{id}/{name}/{popu}",
			headers="Accept=application/json", method = RequestMethod.POST)
	public List<Employee> createCountry(@PathVariable String id,@PathVariable String name,@PathVariable String popu) {
		Employee country=new Employee();
		country.setCountryId(id);
		country.setCountryName(name);
		country.setPopulation(popu);
		
		
		service.addCountry(country);
	
		return service.getAllCountries();
	}
	
	*//**
		 * Method creates a spring form to delete a country
		 * 
		 * @param id
		 * @return   List format Json
		 *//*
	*/
	@RequestMapping(value = "/employee/delete/{id}",
			headers="Accept=application/json",method = RequestMethod.DELETE)
	public List<Employee> deleteEmployee(@PathVariable("id") int id) {
		System.out.println(id);
		empservive.deleteEmployee(id);
		return empservive.getAllEmployee();
}
	@RequestMapping(value ="/employee/create/",consumes = MediaType.APPLICATION_JSON_VALUE,headers="Accept=application/json",method = RequestMethod.POST)
	public List<Employee> createEmployee(@RequestBody Employee emp) {
		
		System.out.println("hiiii");
		System.out.println(emp);
		empservive.addEmployee(emp);
		return empservive.getAllEmployee();
}
	@RequestMapping(value ="/employee/search/{id}",headers="Accept=application/json",method = RequestMethod.GET)
	public Employee searchEmployee(@PathVariable("id") int id) {
		System.out.println("In search");
		return empservive.searchEmployee(id);
}
	@RequestMapping(value ="/employee/update/",consumes = MediaType.APPLICATION_JSON_VALUE,headers="Accept=application/json",method = RequestMethod.PUT)
	public List<Employee> updateEmployee(@RequestBody Employee emp) {
		
		System.out.println("Update");
		System.out.println(emp);
		empservive.updateEmployee(emp);
		return empservive.getAllEmployee();
}
}
