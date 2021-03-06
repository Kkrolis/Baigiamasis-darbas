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

  registrationStatus: any;

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
      
      this.authRequeast.userName = sendForm.value.userName;
      this.authRequeast.firstName = sendForm.value.firstName;
      this.authRequeast.lastName = sendForm.value.lastName;
      this.authRequeast.userPassword = sendForm.value.password;
      this.authRequeast.userEmail = sendForm.value.email;

      this.registrationStatus = this.service.postUser(this.authRequeast);

      setTimeout(() => {
        if (this.registrationStatus.__zone_symbol__value != "BAD") {
          this.openRegistrationSuccesDialog();
        } else {console.log("Invalid Email");
        }
      }, 500);
    
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

    if (sendForm.value.lastName === "") {
      badForm = true;
      wrongLastName.style.display = 'contents';
    } else {wrongLastName.style.display = 'none';}

    // if (sendForm.value.userName === "") {
    //   badForm = true;
    //   noUserName.style.display = 'contents';
    // } else {noUserName.style.display = 'none';}

    if (sendForm.value.email === "" || !this.validateEmail(sendForm.value.email)) {
      badForm = true;
      wrongEmail.style.display = 'contents';
    } else {wrongEmail.style.display = 'none';}

    if (sendForm.value.password === "") {
      badForm = true;
      noPassword.style.display = 'contents';
    } else {noPassword.style.display = 'none';}

    if (sendForm.value.passwordConfirm !== sendForm.value.password) {
      badForm = true;
      wrongConfirmPass.style.display = 'contents';
    } else {wrongConfirmPass.style.display = 'none';}
    return badForm;
  }

  validateEmail(email): boolean {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  }

}


