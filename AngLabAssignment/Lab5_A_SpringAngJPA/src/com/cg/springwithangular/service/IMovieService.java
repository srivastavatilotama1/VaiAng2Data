package com.cg.springwithangular.service;
import java.util.List;
import com.cg.springwithangular.beans.Movies;
public interface IMovieService
{
	public List<Movies> getAllMovie();
	public void addMovie(Movies mov);
	public void deleteMovies(int id);
	public Movies searchMovies(int id);
	public void updateMovies(Movies emp);
	public List<Movies> searchMovieByCat(String mcat);
}
