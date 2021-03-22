import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InvalidLoginComponent } from '../dialogs/invalid-login/invalid-login.component';


@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  authRequest: any =
    {
      "userName": null,
      "userPassword": null
    }

  response: any;
  token: any;

  inputPassword: string;

  constructor(private service: JwtClientService, private readonly router: Router, private readonly route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {

  }

  public login(userName, userPassword) {
    this.authRequest.userName = userName;
    this.authRequest.userPassword = userPassword;
    this.getAccessTokenAndLogin(this.authRequest);

  }

  public getAccessTokenAndLogin(authRequest) {
    let res = this.service.generateToken(authRequest);
    res.subscribe(data => {
      //this.accessApi(data); // this is only for testing porpuses
      this.token = data;
      if (data == "Invalid username or password") {
        this.openInvalidUserDialog();
      } else {
        localStorage.setItem('token', this.token);
        this.accessApi(data);
      }
      this.router.navigate(['/main_page'], { relativeTo: this.route });  // navigates to another route, if used in antoher place doesn't work
    });
  }

  // this for testing saving to local storage
  public accessApi(token) {
    let res = this.service.welcome(token);
    res.subscribe(data => {
      this.response = data;
      localStorage.setItem('userName', this.response);
    });
  }

  public toRegistracion() {
    this.router.navigate(['/registration'], { relativeTo: this.route });
  }

  public openInvalidUserDialog() {
    this.inputPassword = '';
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(InvalidLoginComponent, dialogConfig);
  }

}
