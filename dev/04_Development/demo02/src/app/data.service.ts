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

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAll(): Observable<any>{
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public getComments(): Observable<any>{
    return this.httpClient.get(this.REST_API_SERVER_C);
  }
}
