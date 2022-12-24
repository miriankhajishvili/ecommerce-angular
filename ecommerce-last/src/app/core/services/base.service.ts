import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class BaseService {
  apiUrl = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  post<T>(url: string, body?: any): Observable<T>{
    return this.http.post<T>(this.apiUrl+ url, body)
  }

  get<T>(url: string, params?: any): Observable<T>{
    return this.http.get<T>(this.apiUrl+ url, {params})
  }

 delete<T>(url: string): Observable<T> {
  return this.http.delete<T>(this.apiUrl + url)

 }

 put<T>(url: string, body?: any): Observable<T>{
  return this.http.put<T>(this.apiUrl+ url, body)
}

}
