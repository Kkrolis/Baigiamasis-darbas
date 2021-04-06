import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';
import { LoanReasonService } from '../services/loan-reason.service';
import { from } from 'rxjs';
import { UserService } from '../services/user.service';
import { LoanPostService } from '../services/loan-post.service';


@Component({
  selector: 'app-add-new-loan-post',
  templateUrl: './add-new-loan-post.component.html',
  styleUrls: ['./add-new-loan-post.component.css'],
  providers: [DatePipe]
})
export class AddNewLoanPostComponent implements OnInit {

  myDate = new Date();
  currentDate: string;
  reasons: any;
  oneUser: any;
  reasonId: number;

  loanPost: any = {
    ammount: null,
    reason: null,
    timestamp: null,
    intrest: null,
    durration: null,
    user: null
  };

  constructor(public service: LoanReasonService, private datePipe: DatePipe, private userService: UserService, private loanPostService: LoanPostService) { 
    this.currentDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.service.getLoanReasones()
    .subscribe((respose: Response) => {
      //console.log(data);
      this.reasons = respose;
    });

    this.userService.getOneUser(localStorage.getItem("userName").toString()).subscribe((response: Response) => {
      this.oneUser = response;
    });
  }

  submitForm(form: NgForm) {
    // console.log(this.currentDate);
    this.loanPost.ammount = form.value.loanAmmount;
    this.loanPost.reason = form.value.loanReason;
    this.loanPost.timestamp = this.currentDate;
    this.loanPost.intrest = form.value.intrest;
    this.loanPost.durration = form.value.duration;
    this.loanPost.user = this.oneUser.id;    
    this.loanPostService.postLoanPost(this.loanPost);
  }

}
