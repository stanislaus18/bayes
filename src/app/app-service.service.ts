import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private configUrl: string;

  constructor(private http: HttpClient) { 
    this.configUrl = './../assets/sample.json';
  }

  loadMyJson() {
    return this.http.get(this.configUrl);
  }
}
