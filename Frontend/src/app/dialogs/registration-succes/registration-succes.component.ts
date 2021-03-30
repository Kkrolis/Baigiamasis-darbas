import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from "@angular/material/dialog";
import { RegistrationComponent } from 'src/app/registration/registration.component';


@Component({
  selector: 'app-registration-succes',
  templateUrl: './registration-succes.component.html',
  styleUrls: ['./registration-succes.component.css']
})
export class RegistrationSuccesComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<RegistrationSuccesComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
