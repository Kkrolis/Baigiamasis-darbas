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
  oneReason: any;

  loanPost: any = {
    ammount: null,
    reason: null,
    timestamp: null,
    intrest: null,
    duration: null,
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
    // console.log(form.value.loanReason);
    this.loanPost.ammount = form.value.loanAmmount;
    // this.loanPost.reason = this.getOneReason(Number(form.value.loanReason));
    this.loanPost.reason = this.reasons[form.value.loanReason];

    this.loanPost.timestamp = this.currentDate;
    this.loanPost.intrest = form.value.intrest;
    this.loanPost.duration = form.value.duration;
    this.loanPost.user = this.oneUser;    
    this.loanPostService.postLoanPost(this.loanPost);
  }

  async getOneReason(id: number) {
    await this.service.getOneReason(id).subscribe((response: Response) => {
      this.oneReason = response;
    });
    console.log(this.oneReason.reasonName);
    
    return this.oneReason;
  }

}
