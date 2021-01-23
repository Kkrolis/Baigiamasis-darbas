import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  authRequest: any =
  {
    "userName": "admin",
    "userPassword": "admin"
  }

  response:any;

  constructor(private service: JwtClientService) { }

  ngOnInit(): void {
    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest){
    let res = this.service.generateToken(authRequest);
    res.subscribe(data=>this.accessApi(data));
  }

  public accessApi(token){
    let res = this.service.welcome(token);
    res.subscribe(data=>this.response=data);
  }

}
