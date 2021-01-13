import { Injectable } from '@angular/core';  // Injectable allows us to inject this service in a constructor of a component
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Movie } from '../../models/Movie'
import { Observable } from 'rxjs';
import { gql, Apollo } from 'apollo-angular';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public movies: Movie[];

  constructor(private http:HttpClient, private apollo: Apollo) { }

  public getMoviesGraphQL = (): Movie[] => {
    this.apollo.query({
      query: gql`
      query movies{
        movies {
          _id,
          title,
        }
      }`
    }).subscribe(result => {
      //this.movies = result.data.movies as Movie[];
      //console.log(this.movies);
    })
    return this.movies;
  }

  public getMovies(): Observable<any> {
    return this.http.get<any[]>('/api/movies', httpOptions);
  }

  public getMovieById(id: string): Observable<any> {
    return this.http.get<any>(`/api/movies/${id}`, httpOptions);
  }
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
