import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessagingRoomService } from 'src/app/services/messaging-room.service';

@Component({
  selector: 'app-messaging-dialog',
  templateUrl: './messaging-dialog.component.html',
  styleUrls: ['./messaging-dialog.component.css']
})
export class MessagingDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<MessagingDialogComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any, 
  private messagingRoomService: MessagingRoomService
  ) { }

  room: any;

  ngOnInit(): void {
    // this.messages = this.dialogData.data.roomid;
    // console.log(this.dialogData.data);
    this.messagingRoomService.getRoom(this.dialogData.data.roomId).subscribe(data => {
      this.room = data;
      console.log(this.room);
    });

  }

  close() {
    this.dialogRef.close();
  }

}
