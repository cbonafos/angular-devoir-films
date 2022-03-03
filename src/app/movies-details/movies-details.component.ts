import { Movie, MovieDetails, Comment } from './../model/model';
import { MoviesServiceService } from '../service/movies.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {

  movie?: MovieDetails;
  comments?: Comment[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesServiceService,
    private fb: FormBuilder
  ) { }

  public rating;
  public text;
  public id;
  public currentMovie;

  commentForm = this.fb.group({
    rating: [''],
    text: ['']
  })

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.currentMovie = this.movieService.getMovie(this.id)
    .subscribe(movie => {
      this.movie = movie;
      this.comments = movie.comments;
    });

  }

  addComment(){
    this.movieService.postCommentOnMovie(this.id, this.commentForm.value.rating, this.commentForm.value.text)
    .subscribe(c => {
      this.comments.push(c);
    } )
  }

}
