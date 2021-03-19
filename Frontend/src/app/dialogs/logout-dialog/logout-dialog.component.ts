import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.css']
})
export class LogoutDialogComponent implements OnInit {

  constructor(private readonly router: Router, private readonly route: ActivatedRoute, private dialogRef: MatDialogRef<LogoutDialogComponent>,) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");

    this.router.navigate(['/login'], {relativeTo: this.route});
    this.dialogRef.close();
  }
}
