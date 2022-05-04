import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL = !environment.production ? 'http://localhost:3000/api/' : '/api/'
  constructor(private http: HttpClient) { }

  get<T>(path:string) {
    return this.http.get<T>(this.baseURL + path)
  }
  post<T,D>(path:string, data: D) {
    return this.http.post<T>(this.baseURL + path, data,)
  }
}
