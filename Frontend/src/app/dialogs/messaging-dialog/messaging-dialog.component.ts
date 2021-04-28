import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  messages: any;

  messageBody: any = {
    sender: null,
    room: null,
    message: null,
    timestamp: null
  }

  ngOnInit(): void {
    // this.messages = this.dialogData.data.roomid;
    // console.log(this.dialogData.data);
    this.messagingRoomService.getRoom(this.dialogData.data.roomId).subscribe(data => {
      this.room = data;
      this.messages = this.room.messages;
      console.log(this.messages);
    });

  }

  close() {
    this.dialogRef.close();
  }

  sendMsg(sendForm: NgForm){
    console.log(sendForm.value.msg);
    this.messageBody.sender = this.dialogData.currentUser;
    this.messageBody.room = this.room;
    this.messageBody.message = sendForm.value.msg;
    this.messagingRoomService.sendMsg(this.messageBody);

    this.ngOnInit()
    
  }

}
