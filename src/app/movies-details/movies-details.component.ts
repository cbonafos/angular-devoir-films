import { Movie, MovieDetails } from './../model/model';
import { MoviesServiceService } from '../service/movies.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {

  movie?: MovieDetails;

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesServiceService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.movieService.getMovie(id)
    .subscribe(movie => {
      this.movie = movie;
    });
  }

}
