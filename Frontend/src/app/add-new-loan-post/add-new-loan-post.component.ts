import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoanReasonService } from '../services/loan-reason.service';


@Component({
  selector: 'app-add-new-loan-post',
  templateUrl: './add-new-loan-post.component.html',
  styleUrls: ['./add-new-loan-post.component.css']
})
export class AddNewLoanPostComponent implements OnInit {

  reasons: any;

  constructor(public service: LoanReasonService) { }

  ngOnInit(): void {
    this.service.getLoanReasones()
    .subscribe((respose: Response) => {
      //console.log(data);
      this.reasons = respose;
    });
  }

  submitForm(form: NgForm) {
    console.log("added new post :D");
    
  }

}
