package com.cg.springwithangular.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;



import com.cg.springwithangular.beans.Employee;
import com.cg.springwithangular.staticdb.EmployeeDb;
@Repository("empdao")
public class EmployeeDaoImpl implements IEmployeeDao {
	@PersistenceContext
	EntityManager entitymanager;
	@Override
	public List<Employee> getAllEmployee() {
		// TODO Auto-generated method stub
		Query queryOne=entitymanager.createQuery("FROM Employee");
        List<Employee> allProduct=queryOne.getResultList();		
		return allProduct;
	}

	@Override
	public void deleteEmployee(int id) {
		// TODO Auto-generated method stub
		Query queryTwo=entitymanager.
				createQuery("DELETE FROM Employee WHERE empId=:empid");
		queryTwo.setParameter("empid",id);
		queryTwo.executeUpdate();
		
		
	}

	@Override
	public void addEmployee(Employee emp) {
		// TODO Auto-generated method stub
		entitymanager.persist(emp);
		entitymanager.flush();
		//return pro.getProdId();
	}

	@Override
	public Employee searchEmployee(int id) {
		// TODO Auto-generated method stub
		Employee emp=new Employee();
		Query queryOne=entitymanager.createQuery("FROM Employee");
        List<Employee> allProduct=queryOne.getResultList();	
		
		for (Employee employee : allProduct) {
			if(employee.getEmpId()==id) {
				emp=employee;
				break;
			}
		}
		return emp;
	}

	@Override
	public void updateEmployee(Employee emp) {
		// TODO Auto-generated method stub
		Query queryThree=entitymanager.createQuery("UPDATE Employee SET empName=:ename,empSalary=:esal,empDepartment=:empDep WHERE empId=:eid");
		queryThree.setParameter("ename",emp.getEmpName());
		queryThree.setParameter("esal",emp.getEmpSalary());
		queryThree.setParameter("empDep",emp.getEmpDepartment());
		queryThree.setParameter("eid",emp.getEmpId());
		queryThree.executeUpdate();
	}

	
}
