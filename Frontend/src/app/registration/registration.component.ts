import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RegistrationSuccesComponent } from '../dialogs/registration-succes/registration-succes.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private service: UserService, private dialog: MatDialog) { }

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

    if (!this.validateForm(sendForm)) {
      
   
    // console.log("it is working " +  sendForm.value.firstName);
    this.authRequeast.userName = sendForm.value.userName;
    this.authRequeast.firstName = sendForm.value.firstName;
    this.authRequeast.lastName = sendForm.value.lastName;
    this.authRequeast.userPassword = sendForm.value.password;
    this.authRequeast.userEmail = sendForm.value.email;
    // let user = new UserDto(sendForm.value.usertName, sendForm.value.firstName, sendForm.value.lastName, sendForm.value.password, sendForm.value.email)
    this.service.postUser(this.authRequeast);
    this.openRegistrationSuccesDialog();

    };
  }

  public openRegistrationSuccesDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(RegistrationSuccesComponent, dialogConfig);
  }
  public validateForm(sendForm: NgForm) {
    const wrongName = document.getElementById("wrongName");
    const wrongLastName = document.getElementById("wrongLastName");
    const noUserName = document.getElementById("noUserName");
    const existingUserName = document.getElementById("existingUserName");
    const wrongEmail = document.getElementById("wrongEmail");
    const noPassword = document.getElementById("noPassword");
    const wrongConfirmPass = document.getElementById("wrongConfirmPass");

    let badForm: boolean = false;
    if (sendForm.value.firstName === "") {
      badForm = true;
      wrongName.style.display = 'contents';
    } else {wrongName.style.display = 'none';}

    if (sendForm.value.wrongLastName === "") {
      badForm = true;
      wrongLastName.style.display = 'contents';
    } else {wrongLastName.style.display = 'none';}
    

    return badForm;
  }

}


