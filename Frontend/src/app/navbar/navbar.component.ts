import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LogoutDialogComponent } from '../dialogs/logout-dialog/logout-dialog.component';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogedIn: boolean;
  isTokenExpired: any;


  constructor(private dialog: MatDialog, public service: JwtClientService) { }

  ngOnInit(): void {
    if (localStorage.getItem("token") === null) {
      this.isLogedIn = true;

      
    } else {
      this.isLogedIn = false;
      console.log("loged in");
      this.service.checkIfTokenExpired(localStorage.getItem("token")).subscribe((response: Response) => {
            this.isTokenExpired = response;
            if (!this.isTokenExpired) {
              console.log("tokens cleared");
              localStorage.removeItem("token");
              localStorage.removeItem("userName");
              
            }
          });

    }

    // if (!localStorage.getItem("token") === null) {
    //   console.log("token exists");
      
    //   this.service.checkIfTokenExpired(localStorage.getItem("token")).subscribe((response: Response) => {
    //     this.isTokenExpired = response;
    //     if (!this.isTokenExpired) {
    //       localStorage.removeItem("token");
    //       localStorage.removeItem("userName");
    //       console.log("tokens cleared");
          
    //     }
    //   });
    // }
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(LogoutDialogComponent, dialogConfig);
  }

}
