export class Movie {
  id!: number;
  title!: string;
  poster_path!: string;
  overview!: string;
  genres!: Genre[]

  constructor() {
  }
}

export class MovieDetails {
  id!: number;
  title!: string;
  poster_path!: string;
  overview!: string;
  tagline!: string;
  vote_average!: string;
  runtime!: number;
  spoken_languages!: Language[];
  release_date!: Date;
  genres!: Genre[];
  comment!: Comment[];

  constructor() {
  }
}

export interface Language {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Genre {
  id: number,
  name: string
}

export interface Comment {
  rating: number,
  text: string
}
