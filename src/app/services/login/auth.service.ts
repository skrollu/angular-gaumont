import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Login } from 'src/app/models/Login';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  mode: 'no-cors'
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

  public facebook(): Observable<any> {
    console.log("service")
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Authorization,Content-Type',
        'Access-Control-Allow-Method': 'GET,POST,OPTIONS',
      })
    }
    console.log(options)

    return this.http.get<any[]>('/api/users/auth/facebook', options);
  }
  
  public twitter(): Observable<any> {
    console.log("service")
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4000/api/users/auth/facebook/callback'
      })
    }
    console.log(options)

    return this.http.get<any[]>('/api/users/auth/twitter', options);
  }

  public isAuthenticated() : Boolean {
    let userData = localStorage.getItem('userInfo')
    if(userData && JSON.parse(userData)){
      return true;
    }
    return false;
  }

  public setUserInfo(user){
    localStorage.setItem('userInfo', JSON.stringify(user));
  }

  public getUserInfo(){
    localStorage.getItem('userInfo');
  }

  public removeUserInfo(){
    localStorage.removeItem('userInfo');
  }

  public validate(email, password) {
    return this.http.post('/api/authenticate', {'username' : email, 'password' : password}).toPromise()
  }
}