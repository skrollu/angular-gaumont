import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/Movie'
import { MovieService } from '../../services/movie.service'
import {Apollo, gql} from 'apollo-angular';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: any[];
  loading = true;
  error: any;

  constructor(private movieService:MovieService, private apollo: Apollo) { }

  ngOnInit(): void {
     this.apollo
      .watchQuery({
        query: gql`
          {
            movies {
              _id,
              actors,
              awards{
                nominations,
                text,
                wins
              }
              countries,
              director,
              genres,
              imdb {
                
                rating,
                id,
                votes
              }
              metacritic,
              plot,
              poster,
              rated,
              runtime,
              title,
              tomato {
                consensus,
                fresh,
                image,
                meter,
                rating,
                reviews,
                userMeter,
                userRating,
                userReviews
              }
              type,
              writers,
              year,
              youtubeEmbedUrl,
            }
          }
        `,
      })
      .valueChanges.subscribe(result => {
        console.log(result)
        this.movies = result.data && result.data.movies;
        this.loading = result.loading;
        this.error = result.error;
        
      });

/*
    this.movieService.getMovies().subscribe(movies => { //subscribe is pretty much like then for promise
      this.movies = movies;
    });
*/
  }
}
