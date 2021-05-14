import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = 'http://localhost:3000/api';
  private REST_API_SERVER_C = 'http://localhost:3000/Comments';
  private REST_API_SERVER_B = 'http://localhost:3000/BodyParts';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAll(): Observable<any>{
    return this.httpClient.get(this.REST_API_SERVER);
  }
  // public putAll(backValue: any): Observable<any>{
  //   return this.httpClient.post(this.REST_API_SERVER, backValue);
  // }

  public getComments(): Observable<any>{
    return this.httpClient.get(this.REST_API_SERVER_C);
  }
  public getBodyParts(): Observable<any>{
      return this.httpClient.get(this.REST_API_SERVER_B);
    }

  /** POST: add a new comment to the server */
  // public addComments(comment: any): Observable<any> {
  //   return this.httpClient.post(this.REST_API_SERVER_C, comment);
  // }
}
