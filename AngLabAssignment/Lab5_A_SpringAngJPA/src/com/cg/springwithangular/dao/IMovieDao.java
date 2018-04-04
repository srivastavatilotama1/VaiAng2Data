package com.cg.springwithangular.dao;

import java.util.List;
import com.cg.springwithangular.beans.Movies;

public interface IMovieDao {
	public List<Movies> getAllMovie();
	public void addMovie(Movies emp);
	public void deleteMovie(int id);
	public Movies searchMovie(int id);
	public void updateMovie(Movies emp);
	public List<Movies> searchMovieByCat(String mcat);
}
