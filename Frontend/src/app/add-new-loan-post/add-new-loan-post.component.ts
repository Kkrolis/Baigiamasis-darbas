import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-new-loan-post',
  templateUrl: './add-new-loan-post.component.html',
  styleUrls: ['./add-new-loan-post.component.css']
})
export class AddNewLoanPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(form: NgForm) {
    console.log("added new post :D");
    
  }

}
