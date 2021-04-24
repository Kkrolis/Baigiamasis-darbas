import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.css']
})
export class NotificationDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<NotificationDialogComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any,
  private notificationService: NotificationService) { }

  oneNotification: any;
  from: any;

  ngOnInit(): void {
    this.notificationService.getOneNotification(this.dialogData.id.id).subscribe(data => {
      this.oneNotification = data;
    });

    this.notificationService.readNotification(this.dialogData.id.id).subscribe();

  }

  close() {
    this.dialogRef.close();
  }

}
