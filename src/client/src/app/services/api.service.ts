import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL = 'http://localhost/3000/api/'
  constructor(private http: HttpClient) { }

  get<T>(path:string) {
    return this.http.get<T>(this.baseURL + path)
  }
  post<T,D>(path:string, data: D) {
    this.http.post<T>(this.baseURL + path, data)
  }
}
