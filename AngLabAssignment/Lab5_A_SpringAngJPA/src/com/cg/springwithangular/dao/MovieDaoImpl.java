package com.cg.springwithangular.dao;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cg.springwithangular.beans.Movies;
@Repository("movdao")
//@Transactional
public class MovieDaoImpl implements IMovieDao 
{
	@PersistenceContext
	EntityManager entitymanager;
	@Override
	public List<Movies> getAllMovie() 
	{		
		Query queryOne=entitymanager.createQuery("FROM Movies");
        List<Movies> allMovies=queryOne.getResultList();		
		return allMovies;
	}
	@Override
	public void deleteMovie(int id)
	{		
		Query queryTwo=entitymanager.
				createQuery("DELETE FROM Movies WHERE moviesId=:movid");
		queryTwo.setParameter("movid",id);
		queryTwo.executeUpdate();		
	}
	@Override
	public void addMovie(Movies mov) 
	{	
		System.out.println(" in dao "+mov);
		entitymanager.persist(mov);
		entitymanager.flush();	
	}

	@Override
	public List<Movies> searchMovieByCat(String mcat)
	{		
		Movies mo=new Movies();
		Query queryOne=entitymanager.createQuery("FROM Movies");
        List<Movies> allMov=queryOne.getResultList();	
        List<Movies> mocCatList=new ArrayList<Movies>();
		for (Movies mov : allMov)
		{
			if(mov.getMoviesGenre().equals(mcat)) 
			{
				//mo=mov;
				mocCatList.add(mov);
				//break;
			}
		}
		return mocCatList;
	}

	@Override
	public void updateMovie(Movies mov)
	{		
		//Query queryThree=entitymanager.createQuery("UPDATE Movies SET moviesName=:mname,moviesRating=:esal,empDepartment=:empDep WHERE empId=:eid");
		//queryThree.setParameter("ename",emp.getEmpName());
		//queryThree.setParameter("esal",emp.getEmpSalary());
		//queryThree.setParameter("empDep",emp.getEmpDepartment());
		//queryThree.setParameter("eid",emp.getEmpId());
		//queryThree.executeUpdate();
	}
	@Override
	public Movies searchMovie(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	
}
