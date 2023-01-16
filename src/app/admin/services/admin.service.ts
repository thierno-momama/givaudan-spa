import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { Test } from 'src/app/Test';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = "http://localhost:5000/tests";
  constructor(private http: HttpClient) { }

  getTests(): Observable<Test[]>{
    return this.http.get<Test[]>(this.url);
  }

  deleteTest(test: Test): Observable<Test>{
    const urlDelete = `${this.url}/${test.id}`;
    return this.http.delete<Test>(urlDelete);
  }
  addTest(test: Test): Observable<Test>{
    return this.http.post<Test>(this.url, test, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }
}
