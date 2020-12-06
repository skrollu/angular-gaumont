import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../models/Movie'
import { MovieService } from '../../../services/movie.service'

/* interface MoviesResponse { //cf Httpclient Angular documentation
  movies: Movie[]
   error: string
  loading: boolean 
} */

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.css']
})
export class MovieComponent implements OnInit {
  movies: Movie[];
  loading = true;
  error: any;

  translateGrid: number = 0;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
     /* this.movies = this.movieService.getMoviesGraphQL()  */
    this.movieService.getMovies().subscribe( (result /*: MoviesResponse */) => {
      this.movies = (result as any).movies as Movie[]
    })
  }

  nextMovies(){
    this.translateGrid = this.translateGrid + 1500;
  }

  previousMovies(){
    this.translateGrid = this.translateGrid - 1500;
  }
}
