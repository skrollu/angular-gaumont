export class Movie {
  _id: string;
  actors: string[];
  awards: {
    nominations: Number
    text: string
    wins: Number
  };
  countries: string[];
  director: string;
  genres: string[];
  imdb: {
    id: string;
    rating: Number;
    votes: Number;
  };
  metacritic: string;
  plot: string;
  poster: string;
  rated: string;
  runtime: Number;
  title: string;
  tomato: {
    consensus: string
    fresh: Number
    image: string
    meter: Number
    rating: Number
    reviews: Number
    userMeter: Number
    userRating: Number
    userReviews: Number
  };
  type: string;
  writers: string;
  year: Number;
  youtubeEmbedUrl: string;
}

