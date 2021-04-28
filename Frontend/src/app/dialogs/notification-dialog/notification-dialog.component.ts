import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { MessagingRoomService } from 'src/app/services/messaging-room.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.css']
})
export class NotificationDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<NotificationDialogComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any,
  private notificationService: NotificationService, private messagingRoomService: MessagingRoomService, private userService: UserService) { }

  oneNotification: any;
  from: any;

  currentUser: any;

  room: any = {
    user1: null,
    user2: null
  }

  ngOnInit(): void {
    this.notificationService.getOneNotification(this.dialogData.id.id).subscribe(data => {
      this.oneNotification = data;
    });

    this.notificationService.readNotification(this.dialogData.id.id).subscribe();

    this.userService.getOneUser(localStorage.getItem("userName")).subscribe(data =>{
      this.currentUser = data;
    });

  }

  close() {
    this.dialogRef.close();
  }

  connectUsers(){
    this.room.user1 = this.currentUser;
    this.room.user2 = this.oneNotification.from;
    this.messagingRoomService.createRoom(this.room);
  }

}
