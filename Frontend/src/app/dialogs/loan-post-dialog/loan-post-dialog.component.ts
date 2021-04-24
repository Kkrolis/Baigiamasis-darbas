import { Component, OnInit, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { NotificationService } from 'src/app/services/notification.service';
import { ThrowStmt } from '@angular/compiler';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-loan-post-dialog',
  templateUrl: './loan-post-dialog.component.html',
  styleUrls: ['./loan-post-dialog.component.css'],
  providers: [DatePipe]
})
export class LoanPostDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<LoanPostDialogComponent>,  @Inject(MAT_DIALOG_DATA) public dialogData: any,
   private notificationService: NotificationService, private datePipe: DatePipe, private userService: UserService) { 
    this.currentDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
   }


  loanPostUser = this.dialogData.id.user.firstName;
  allLoanPostData = this.dialogData.id;

  myDate = new Date();
  currentDate: string;
  fromUser: any;

  notification: any = {
    status: null,
    to: null,
    from: null,
    timestamp: null,
    loanPost: null
  }

  ngOnInit(): void {
    this.userService.getOneUser(localStorage.getItem("userName").toString()).subscribe((response: Response) => {
      this.fromUser = response;
    });
  }

  close() {
    this.dialogRef.close();
  }

  connectUsers() {
    console.log("connecting users: " + this.loanPostUser + " and " + localStorage.getItem("userName"));
    this.notification.status = "TOREAD";
    this.notification.to = this.dialogData.id.user;
    this.notification.from = this.fromUser;
    this.notification.timestamp = this.currentDate;
    this.notification.loanPost = this.dialogData.id;
    
    this.notificationService.sendNotificiation(this.notification);
  }

}
