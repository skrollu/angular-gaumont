import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Login } from 'src/app/models/Login';
import { Observable } from 'rxjs';

const httpOptions = {
/*   headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }), */
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  public register(email: string, password: string): Observable<any> {
    return this.http.post<any>('/api/users/register', {email, password}, httpOptions);
  }

  public login(email: string, password: string): Observable<Login> {
    return this.http.post<any>('/api/users/login', {email, password}, httpOptions);
  }

  public logout(): Observable<any> {
    return this.http.get<any[]>('/api/users/logout', httpOptions);
  }

  public isAuthenticated() : Boolean {
    let userData = localStorage.getItem('user')
    if(userData && JSON.parse(userData)){
      return true;
    }
    return false;
  }

  public setUser(user){
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser(){
    return localStorage.getItem('user');
  }

  public removeUser(){
    localStorage.removeItem('user');
  }

  public setSocialUser(socialUser){
    localStorage.setItem('socialUser', JSON.stringify(socialUser));
  }

  public getSocialUser(){
    return localStorage.getItem('socialUser');
  }

  public removeSocialUser(){
    localStorage.removeItem('socialUser');
  }
}
