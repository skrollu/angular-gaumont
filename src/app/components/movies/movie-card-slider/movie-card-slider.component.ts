import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Movie } from '../../../models/Movie'
import { MovieService } from '../../../services/movie/movie.service'

@Component({
  selector: 'app-movie-card-slider',
  templateUrl: './movie-card-slider.component.html',
  styleUrls: ['./movie-card-slider.component.sass'],
})
export class MovieCardSliderComponent implements OnInit {
  
  @Input() movies: Movie[];
  
  NB_DISPLAYED_CARD_BY_SLIDE: number = 5;
  NB_CARDS: any;
  NB_SLIDES: any;
  nbSlidePixels: number = 2190;
  maxSlidePixels: number;
  index: number = 0;
  
  constructor(private movieService: MovieService) { } 
  
  ngOnInit(): void {
    /* this.movies = this.movieService.getMoviesGraphQL()  */
    this.movieService.getMovies().subscribe( (result /*: MoviesResponse */) => {
      this.movies = (result as any).movies as Movie[]
      this.NB_CARDS = this.movies.length;
      this.NB_SLIDES = Math.ceil(this.NB_CARDS/this.NB_DISPLAYED_CARD_BY_SLIDE) - 1;
      this.maxSlidePixels = this.NB_SLIDES * this.nbSlidePixels;
    })
    console.log("Screen width: " + window.innerWidth)
    console.log("Screen height: " + window.innerHeight)
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log("Resize screen width: " + window.innerWidth)
    console.log("Resize screen height: " + window.innerHeight)
  }
  
  next(): void {
    if(this.index === -this.maxSlidePixels) {
      this.index = 0;
    } else {
      this.index -= this.nbSlidePixels;
    }
    console.log("slide index: " + this.index)
  }
  
  previous(): void {
    if(this.index === 0) {
      this.index = -this.maxSlidePixels;
    } else {
      this.index += this.nbSlidePixels;
    }
    console.log("slide index: " + this.index)
  }
}