import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.sass']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;

  constructor() { }

  ngOnInit(): void {
  }
}
