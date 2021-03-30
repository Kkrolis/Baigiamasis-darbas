import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

import { GlobalConstants } from './global-constants';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  apiUrl = GlobalConstants.apiURL;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  public generateToken(request){
    return this.http.post(this.apiUrl + "/auth", request, {responseType: 'text' as 'json'});
  }

  public getUserName(token){
    let tokenStr: string = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.http.get(this.apiUrl + "/userName", {headers, responseType: 'text' as 'json'});
  }

  public isAuthenticated(): boolean{
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  public checkIfTokenExpired(token) {
    let tokenStr: string = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.http.get(this.apiUrl + "/isExpired", {headers, responseType: 'text' as 'json'});
  }

}
