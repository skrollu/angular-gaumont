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
