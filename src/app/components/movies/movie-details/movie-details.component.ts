import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  reservationDisplayed: boolean;

  timetable: [
    [14, 15, 17, 19, 20, 23],
    [14, 15, 17, 19, 20, 23],
    [11, 15, 17, 19, 20, 23],
    [11, 15, 18, 19, 20, 23],
    [10, 16, 17, 19, 20, 0],
    [14, 15, 17, 19, 20, 23],
    [8, 15, 17, 19, 20, 22],
  ]

  constructor(private movieService: MovieService, private route: ActivatedRoute) {  
    this.reservationDisplayed = false;
  }

  ngOnInit(): void {
    this.movieService.getMovieById(this.route.snapshot.paramMap.get('id'))
      .subscribe( result => {
        console.log(result)
        this.movie = (result as any).movie as Movie;
      });
  }

  onReserveClick() {
    this.reservationDisplayed = true;
  }
}
