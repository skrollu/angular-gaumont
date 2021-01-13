import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../models/Movie'
import { MovieService } from '../../../services/movie/movie.service'

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
  
  slideInc: number = 33;
  slideX: number = 0;
  displayedCardNumber: number = 4;
  
  constructor(private movieService: MovieService) { }
  
  public innerWidth: any;

  ngOnInit(): void {
    /* this.movies = this.movieService.getMoviesGraphQL()  */
    this.movieService.getMovies().subscribe( (result /*: MoviesResponse */) => {
      this.movies = (result as any).movies as Movie[]
    })

    this.innerWidth = window.innerWidth;
  }
  
  previousMovies(): void  {
    if(this.slideX === 0) {
      this.slideX = -this.slideInc*(Math.floor(this.movies.length/this.displayedCardNumber))
    } else {
      this.slideX = this.slideX + this.slideInc
    }
    console.log(this.slideX)
  }
  
  nextMovies(): void {
    /*
    //in order to avoid blank slide 
    14%4 = 2 => Math.round(this.movies.length/this.displayedCardNumber) = 4
     Il faut donc retirer 1 car le 4 eme slide serait blanc
     On va donc utilier Math.floor pour prendre la partie entière
    slide 0 : 0 1 2  3
    slide 1 : 4 5 6  7   
    slide 2 : 8 9 10 11 
    slide 3 : 12 13
    */
    
    if(this.slideX === -this.slideInc*(Math.floor(this.movies.length/this.displayedCardNumber))) {
      this.slideX = 0
    } else {
      this.slideX = this.slideX - this.slideInc
    }
    
  }
}