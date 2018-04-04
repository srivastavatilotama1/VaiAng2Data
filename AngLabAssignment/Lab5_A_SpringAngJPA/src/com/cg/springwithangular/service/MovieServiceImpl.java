package com.cg.springwithangular.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.SystemEnvironmentPropertySource;
import org.springframework.stereotype.Service;
import com.cg.springwithangular.beans.Movies;
import com.cg.springwithangular.dao.IMovieDao;
@Transactional
@Service("movieservice")
public class MovieServiceImpl implements IMovieService{
	@Autowired
	IMovieDao movdao;
	@Override
	public List<Movies> getAllMovie()
	{		
		return movdao.getAllMovie();
	}
	@Override
	public void deleteMovies(int id)
	{		
		movdao.deleteMovie(id);
	}
	@Override
	public void addMovie(Movies mov)
	{		
		System.out.println(" in service "+mov);
		movdao.addMovie(mov);
		
	}
	@Override
	public Movies searchMovies(int id) 
	{	
		return movdao.searchMovie(id);
	}
	@Override
	public void updateMovies(Movies mov)
	{		
		movdao.updateMovie(mov);
	}
	@Override
	public List<Movies> searchMovieByCat(String mcat) {
		
		return movdao.searchMovieByCat(mcat);
	}
	
	
}
