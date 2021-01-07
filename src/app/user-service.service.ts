import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  baseUri = "https://jsonplaceholder.typicode.com"
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {
  }

  getUser(){
    const url = `${this.baseUri}/users`;
    return this.http.get(url)
  }
}
