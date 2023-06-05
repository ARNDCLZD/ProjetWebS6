import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  get(endpoint: string) {
    return this.http.get(this.url + endpoint);
  }

  post(endpoint: string, data: any) {
    return this.http.post(this.url + endpoint, data);
  }

  put(endpoint: string, data: any) {
    return this.http.put(this.url + endpoint, data);
  }

  delete(endpoint: string) {
    return this.http.delete(this.url + endpoint);
  }
}
