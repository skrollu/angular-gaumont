import { Injectable } from '@angular/core';  // Injectable allows us to inject this service in a constructor of a component
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Movie } from '../models/Movie'
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  graphqlUrl:string = "http://http://localhost:4000/graphql"

  constructor(private http:HttpClient) { }

  getMovies():Observable<Movie[]> {
    return this.http.post<Movie[]>(`${this.graphqlUrl}`, {
      /*query movies {
        movies{
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
      }*/
    })
  }

/*
  toggleCompleted(todo:Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.put(url, todo, httpOptions)
  }

  deleteTodo(todo:Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.delete<Todo>(url, httpOptions);
  }

  addTodo(todo:Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }
*/
}
