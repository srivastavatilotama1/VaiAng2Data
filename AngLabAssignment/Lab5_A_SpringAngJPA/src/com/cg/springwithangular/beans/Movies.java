package com.cg.springwithangular.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="MovieAngular")
public class Movies
{
	@Id
	@Column(name="mov_id", length=10)
	private Integer moviesId;
	
	@Column(name="mov_name",length=10)
	private String moviesName;
	
	@Column(name="mov_rat", length=10)
	private Integer moviesRating;
	
	@Column(name="mov_gen",length=10)
	private String moviesGenre;
	public Integer getMoviesId() {
		return moviesId;
	}
	public void setMoviesId(Integer moviesId) {
		this.moviesId = moviesId;
	}
	public String getMoviesName() {
		return moviesName;
	}
	public void setMoviesName(String moviesName) {
		this.moviesName = moviesName;
	}
	public Integer getMoviesRating() {
		return moviesRating;
	}
	public void setMoviesRating(Integer moviesRating) {
		this.moviesRating = moviesRating;
	}
	public String getMoviesGenre() {
		return moviesGenre;
	}
	public void setMoviesGenre(String moviesGenre) {
		this.moviesGenre = moviesGenre;
	}
	@Override
	public String toString() {
		return "Movies [moviesId=" + moviesId + ", moviesName=" + moviesName + ", moviesRating=" + moviesRating
				+ ", moviesGenre=" + moviesGenre + "]";
	}


}
