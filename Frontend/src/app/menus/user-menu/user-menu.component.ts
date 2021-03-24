import { Component, OnInit } from '@angular/core';
import { JwtClientService } from 'src/app/jwt-client.service';
import { UserDto } from 'src/app/models/userDto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  constructor(private service: JwtClientService, public userService: UserService) { }
  isLogedIn: boolean;

  userName: any;
  users: any;

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
    
    this.userService.getUsers()
    .subscribe((respose: Response) => {
      //console.log(data);
      this.users = respose;

    });
    console.log(this.users);
  }

  getId (user) {
    localStorage.setItem("destination", user)
  }

}
