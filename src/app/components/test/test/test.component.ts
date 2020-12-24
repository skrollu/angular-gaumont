import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import { Movie } from '../../../models/Movie'
import { MovieService } from '../../../services/movie.service'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  animations: [
    // animation triggers go here
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ])
  ],
})
export class TestComponent implements OnInit {
  
  isOpen = true;
  
  toggle() {
    this.isOpen = !this.isOpen;
  }
  
  slideArray: any = [ 1, 2, 3, 4];
  
  slideInc: number = 100;
  slideX: number = 0;
  
  movies: Movie[];
  
  constructor(private movieService: MovieService) { }
  

  ngOnInit(): void {
    /* this.movies = this.movieService.getMoviesGraphQL()  */
    this.movieService.getMovies().subscribe( (result /*: MoviesResponse */) => {
      this.movies = (result as any).movies as Movie[]
    })
  }
  
  nextMovies(): void  {
    if(this.slideX === 0) {
      this.slideX = -this.slideInc*(this.slideArray.length -1)
    } else {
      this.slideX = this.slideX + this.slideInc
    }
    console.log(this.slideX)
  }
  
  previousMovies(): void {
    if(this.slideX === -this.slideInc*(this.slideArray.length -1)) {
      this.slideX = 0
    } else {
      this.slideX = this.slideX - this.slideInc
    }
    console.log(this.slideX)
  }
  
  goLeft(): void  {
    if(this.slideX === 0) {
      this.slideX = -this.slideInc*(this.slideArray.length -1)
    } else {
      this.slideX = this.slideX + this.slideInc
    }
    console.log(this.slideX)
  }
  
  goRight(): void {
    if(this.slideX === -this.slideInc*(this.slideArray.length -1)) {
      this.slideX = 0
    } else {
      this.slideX = this.slideX - this.slideInc
    }
    console.log(this.slideX)
  }
}
