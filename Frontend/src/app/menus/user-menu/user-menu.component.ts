import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationDialogComponent } from 'src/app/dialogs/notification-dialog/notification-dialog.component';
import { JwtClientService } from 'src/app/jwt-client.service';
import { UserDto } from 'src/app/models/userDto';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  constructor(private service: JwtClientService, public userService: UserService, private notificationService: NotificationService, private dialog: MatDialog) { }
  isLogedIn: boolean;

  userName: any;
  users: any;

  currentUser: any;
  notifications: any;
  oneNotification: any;

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

    // geting one user------------------
    if (localStorage.getItem('userName') === null) {
      setTimeout(() => {
        this.userService.getOneUser(this.userName).subscribe(data => {
          this.currentUser = data;
          this.notifications = this.currentUser.notifications;
          console.log(this.notifications); 
        });

      }, 1000);
    } else {
      this.userService.getOneUser(this.userName).subscribe(data => {
        this.currentUser = data;
        this.notifications = this.currentUser.notifications;
        console.log(this.notifications); 
      });
    }

    //--------------------
  }
  

  getOneNotification(id){
    this.notificationService.getOneNotification(id).subscribe(data => {
      this.oneNotification = data;
    });
  }

  setUser(){
    this.userService.getOneUser(this.userName).subscribe(data => {
      this.currentUser = data;
      this.notifications = this.currentUser.notifications;
      console.log(this.notifications); 
    });
  }


  openNotificationDialgo(notificationId){
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: notificationId
    }
    
    this.dialog.open(NotificationDialogComponent, dialogConfig);
  }


  getId (user) {
    localStorage.setItem("destination", user)
  }

}
