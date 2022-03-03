import { Movie } from './../model/model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre, Comment } from '../model/model';

import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  responseSubject: BehaviorSubject<any>;
  genreIdSelected: number;
  url = 'https://movie-api.benoithubert.me/movies';
  urlGenres = 'https://movie-api.benoithubert.me/genres';

  constructor(private http: HttpClient) {
    this.responseSubject = new BehaviorSubject(null);
  }

  getResponseValue(): any {
    return this.responseSubject.getValue();
  }

  setResponse(response: any): void {
    this.responseSubject.next(response);
  }

  getAllMovies(): Observable<any[]> {
    return this.http
    .get<any[]>(
      `${this.url}`)
    }

    getMovie(id: number): Observable<any> {
      return this.http
      .get<any>(
        `${this.url}/${id}`
      )
    }

    getAllGenres(): Observable<any[]> {
      return this.http
      .get<any[]>(
        `${this.urlGenres}`)
      }

    getMoviesByGenre(genreId: number): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(
        `${this.url}?genre_id=${genreId}`
      )
    }

    postCommentOnMovie(id: number, rating: number, text: string) : Observable<Comment>{
      return this.http
      .post<Comment>(`${this.url}/${id}/comments`, { rating, text })
    }
}
