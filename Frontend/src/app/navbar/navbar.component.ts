import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LogoutDialogComponent } from '../dialogs/logout-dialog/logout-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogedIn: boolean;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    if (localStorage.getItem("token") === null) {
      this.isLogedIn = true;
    } else {
      this.isLogedIn = false;
    }
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(LogoutDialogComponent, dialogConfig);
  }

}
