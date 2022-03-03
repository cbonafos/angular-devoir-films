import { MoviesServiceService } from './../service/movies.service';
import { SidebarComponent } from './../sidebar/sidebar.component';
import { Movie, Genre } from './../model/model';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CardComponent } from './../card/card.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Movie[] = [];

  constructor(
    private movieService: MoviesServiceService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.movieService.responseSubject.subscribe(e => {
      if (e){
        this.movieService.getMoviesByGenre(this.movieService.getResponseValue())
          .subscribe(movies => {
            this.movies = movies;
          });
      }
      else {
        this.movieService.getAllMovies()
          .subscribe(movies => {
            this.movies = movies;
          });
      }
    });
  }
}
