import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../global-constants';

@Injectable({
  providedIn: 'root'
})
export class LoanReasonService {

  apiUrl = GlobalConstants.apiURL;

  constructor(private http: HttpClient) { }

  public getLoanReasones(){
    let tokenStr: string = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.http.get(this.apiUrl + "/loanReasons/", {headers});
  }

  public getOneReason (id: number){
    let tokenStr: string = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.http.get(this.apiUrl + "/loanReasons/" + id, {headers});
  }
}
