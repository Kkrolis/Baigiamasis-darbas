import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http: HttpClient) { }

  public generateToken(request){
    return this.http.post("http://localhost:8080/auth", request, {responseType: 'text' as 'json'});
  }

  public welcome(token){
    let tokenStr: string = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.http.get("http://localhost:8080/", {headers, responseType: 'text' as 'json'});
  }
}