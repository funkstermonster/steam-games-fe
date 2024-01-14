import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
   apiUrl: string = "http://localhost:8080/api/steam";

  constructor(private http: HttpClient) { }

  getOwnedGamesFromStream() {
    return  this.http.get(this.apiUrl);
  }
}
