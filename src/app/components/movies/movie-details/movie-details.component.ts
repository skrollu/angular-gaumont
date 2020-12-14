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

  timetable: [12.30, 14.00, 16.30, 20.00, 23.15];
/*
  timetable: [
    [12.30, 14.00, 16.30, 20.00, 23.15],
    [9.30, 12.00, 15.30, 18.15, 21.15],
    [10.10, 12.50, 13.30, 16.00, 19.15],
    [11.15, 17.00, 20.00],
    [12.30, 16.25, 16.30, 20.00],
    [9.50, 13.00, 16.30, 19.20, 22.55],
    [10.30, 12.00, 16.30, 19.20, 21.55],
    [10.30, 13.00, 16.30, 19.20, 21.55],
  ]
*/
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
    this.reservationDisplayed = !this.reservationDisplayed;
    console.log(this.reservationDisplayed)
  }
}
