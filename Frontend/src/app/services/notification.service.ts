import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../global-constants';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  apiUrl = GlobalConstants.apiURL;


  constructor(private http: HttpClient) { }


  public readNotification (id: number) {
    let tokenStr: string = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.http.get(this.apiUrl + "/notification/read/" + id, {headers});
  }

  public getOneNotification(id: number) {
    let tokenStr: string = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.http.get(this.apiUrl + "/notification/get/" + id, {headers});
  }

  public sendNotificiation(request){
    let tokenStr: string = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + "/notification/send", request, {...request, headers})
      .subscribe((resposnse: any) => {
        resolve(resposnse);
      });
    });
  }
}
