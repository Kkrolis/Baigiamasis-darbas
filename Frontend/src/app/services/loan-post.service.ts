import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../global-constants';


@Injectable({
  providedIn: 'root'
})
export class LoanPostService {

  apiUrl = GlobalConstants.apiURL;


  constructor(private http: HttpClient) { }

  public getPosts () {
    let tokenStr: string = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.http.get(this.apiUrl + "/loanPost/", {headers});
  }
}
