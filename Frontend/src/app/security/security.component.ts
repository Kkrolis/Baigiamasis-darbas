import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  authRequest: any =
  {
    "userName": null,
    "userPassword": null
  }

  response:any;
  token:any;
  test1: string = localStorage.getItem('token');

  constructor(private service: JwtClientService, private readonly router: Router, private readonly route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  public login(userName, userPassword){
    this.authRequest.userName = userName;
    this.authRequest.userPassword = userPassword;
    this.getAccessTokenAndLogin(this.authRequest);
  }

  public getAccessTokenAndLogin(authRequest){
    let res = this.service.generateToken(authRequest);
    res.subscribe(data=>{
      this.accessApi(data); // this is only for testing porpuses
      this.token = data;
      if (data == "Invalid username or password") {
        alert("Invalid username or password");
      } else {
        localStorage.setItem('token', this.token);
      }
      this.router.navigate(['/main_page'], {relativeTo: this.route});  // navigates to another route, if used in antoher place doesn't work
    });
  }

// this for testing saving to local storage
  public accessApi(token){
    let res = this.service.welcome(token);
    res.subscribe(data=>{
      this.response = data;
      localStorage.setItem('userName', this.response);
    });
  }

}
