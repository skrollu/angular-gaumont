import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Cinema } from '../../models/Cinema'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  public movies: Cinema[];

  constructor(private http:HttpClient) { }

  public getCinemas(): Observable<any[]> {
    return this.http.get<any[]>('/api/cinemas', httpOptions);
  }
}