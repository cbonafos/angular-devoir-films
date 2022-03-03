import { HomeComponent } from './../home/home.component';
import { MoviesServiceService } from './../service/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Genre, Movie } from './../model/model';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public genreSelected: string;
  genres: Genre[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesServiceService,
    ) { }

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres(): void {
    this.movieService.getAllGenres()
    .subscribe(movies => this.genres = movies)
  }

  setGenre(genreIdSelected: number){
    this.movieService.genreIdSelected = genreIdSelected;
  }

  changeGenre(genreIdSelected: number){
    this.movieService.setResponse(genreIdSelected);
  }
}
