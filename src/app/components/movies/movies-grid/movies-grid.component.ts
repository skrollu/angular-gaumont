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
  styleUrls: ['./movies-grid.component.css'],
})
export class MovieComponent implements OnInit {
 
  error: any;
   
  constructor() { } 
  
  ngOnInit(): void {
  }
}