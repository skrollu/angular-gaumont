import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/Login';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public register(username: string, password: string): Observable<any> {
    return this.http.post<any>('/api/users/register', {username, password}, httpOptions);
  }

  public login(username: string, password: string): Observable<Login> {
    return this.http.post<any>('/api/users/login', {username, password}, httpOptions);
  }

  public logout(): Observable<any> {
    return this.http.get<any[]>('/api/users/logout', httpOptions);
  }
}
