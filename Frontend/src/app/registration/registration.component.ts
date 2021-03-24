import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  authRequeast: any = {
    userName: null,
    firstName: null,
    lastName: null,
    userPassword: null,
    userEmail: null
  }

  public register(sendForm: NgForm){
    // console.log("it is working " +  sendForm.value.firstName);
    this.authRequeast.userName = sendForm.value.userName;
    this.authRequeast.firstName = sendForm.value.firstName;
    this.authRequeast.lastName = sendForm.value.lastName;
    this.authRequeast.userPassword = sendForm.value.password;
    this.authRequeast.userEmail = sendForm.value.email;
    // let user = new UserDto(sendForm.value.usertName, sendForm.value.firstName, sendForm.value.lastName, sendForm.value.password, sendForm.value.email)
    this.service.postUser(this.authRequeast);
  }

}
