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

import com.cg.springwithangular.beans.Movies;
import com.cg.springwithangular.service.IMovieService;

@RestController
public class MovieController
{
	@Autowired
	IMovieService movieservice;
	
	@RequestMapping(value = "/movie",method = RequestMethod.GET,headers="Accept=application/json")
	public List<Movies> getAllMovies(Model model) 
	{		
		return movieservice.getAllMovie();
		
	}	
	@RequestMapping(value = "/movie/delete/{id}",
			headers="Accept=application/json",method = RequestMethod.DELETE)
	public List<Movies> deleteMovie(@PathVariable("id") int id) 
	{		
		movieservice.deleteMovies(id);
		System.out.println(id  +" Deleted ..............");
		return movieservice.getAllMovie();
}
	@RequestMapping(value ="/movie/create/",consumes = MediaType.APPLICATION_JSON_VALUE,
			headers="Accept=application/json",method = RequestMethod.POST)
	public List<Movies> createMovie(@RequestBody Movies mov) 
	{		
		System.out.println(mov +" in ctrl..........................");
		movieservice.addMovie(mov);
		System.out.println(mov +" Movie Added..........");
		return movieservice.getAllMovie();
}
	@RequestMapping(value ="/movie/search/{id}",headers="Accept=application/json",method = RequestMethod.GET)
	public List<Movies> searchMovieByCat(@PathVariable("id") String movCat) {
		System.out.println("In search movie");
		return movieservice.searchMovieByCat(movCat);
}
	@RequestMapping(value ="/employee/update/",consumes = MediaType.APPLICATION_JSON_VALUE,headers="Accept=application/json",method = RequestMethod.PUT)
	public List<Movies> updateEmployee(@RequestBody Movies mov) {
				
		movieservice.updateMovies(mov);
			System.out.println(mov+  "updated...........");
		return movieservice.getAllMovie();
}
}
