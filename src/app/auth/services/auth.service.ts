import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Signup } from 'src/app/Signup';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlSingup = "http://localhost:5000/signup";

  constructor(private http: HttpClient) { }

  getSignup(): Observable<Signup[]>{
    return this.http.get<Signup[]>(this.urlSingup);
  }

  addSingup(user: Signup): Observable<Signup>{
    return this.http.post<Signup>(this.urlSingup, user, {
      headers: new HttpHeaders({
        'Content-Type': "application/json"
      })
    });
  }
}
