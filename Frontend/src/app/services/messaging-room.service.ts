import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../global-constants';

@Injectable({
  providedIn: 'root'
})
export class MessagingRoomService {

  apiUrl = GlobalConstants.apiURL;

  constructor(private http: HttpClient) { }

  public createRoom(request){
    let tokenStr: string = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + "/room/createRoom", request, {...request, headers})
      .subscribe((resposnse: any) => {
        resolve(resposnse);
      });
    });
  }

  public getRoom(id: number){
    let tokenStr: string = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.http.get(this.apiUrl + "/room/getRoom/" + id, {headers});
  }

  public sendMsg(request) {
    let tokenStr: string = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + "/message/sendMessage", request, {...request, headers})
      .subscribe((resposnse: any) => {
        resolve(resposnse);
      });
    });
  }
}
