import { Component, OnInit } from '@angular/core';
import { JwtClientService } from 'src/app/jwt-client.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  constructor(private service: JwtClientService) { }
  isLogedIn: boolean;

  userName: any;

  ngOnInit(): void {
    if (localStorage.getItem('userName') === null) {
      let res = this.service.getUserName(localStorage.getItem('token'));
      res.subscribe(data => {
        this.userName = data;
        localStorage.setItem('userName', this.userName);
      });
    } else {
      this.userName = localStorage.getItem("userName");
    }
    
  }

}
