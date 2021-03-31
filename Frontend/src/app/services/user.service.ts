import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../global-constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = GlobalConstants.apiURL;

  constructor(private http: HttpClient) { }

  public postUser(request) {
    // console.log("service is working");
    
    return new Promise ((resolve, reject) => {
      this.http.post(this.apiUrl + "/user/register", request, {...request})
      .subscribe((response: any) => {
        resolve(response);
      });
    }) 
  }

  public getUsers () {
    let tokenStr: string = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.http.get(this.apiUrl + "/user/users", {headers});
  }
}
