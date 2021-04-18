import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-loan-post-dialog',
  templateUrl: './loan-post-dialog.component.html',
  styleUrls: ['./loan-post-dialog.component.css']
})
export class LoanPostDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<LoanPostDialogComponent>,  @Inject(MAT_DIALOG_DATA) public dialogData: any) { }
  loanPostUser = this.dialogData.id.user.userName;
  allLoanPostData = this.dialogData.id;

  ngOnInit(): void {
    
  }

  close() {
    this.dialogRef.close();
  }

  connectUsers() {
    console.log("connecting users: " + this.loanPostUser + " and " + localStorage.getItem("userName"));
    
  }

}
