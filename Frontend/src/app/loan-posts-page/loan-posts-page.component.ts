import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoanPostDialogComponent } from '../dialogs/loan-post-dialog/loan-post-dialog.component';
import { LoanPostService } from '../services/loan-post.service';

@Component({
  selector: 'app-loan-posts-page',
  templateUrl: './loan-posts-page.component.html',
  styleUrls: ['./loan-posts-page.component.css']
})
export class LoanPostsPageComponent implements OnInit {

  posts: any;
  tableHeaders = ['Id', 'Kiekis', 'Paskolos tikslas', 'Skelbimo idejimo data', 'Palūkanų kiekis', 'Kokiam laikotarpiui', ''];



  constructor(private dialog: MatDialog, public service: LoanPostService) { }

  ngOnInit(): void {
    // this.service.getPosts()
    //   .subscribe((respose: Response) => {
    //     //console.log(data);
    //     this.posts = respose;
    //   });
    this.getposts();
  }

  async getposts() {
    await this.service.getPosts()
    .subscribe((respose: Response) => {
      //console.log(data);
      this.posts = respose;
    });
  }
  
  getReasonName(row: number) {
    // console.log(reason);
    if (this.posts[row].reason.reasonName !== null) {
      return String(this.posts[row].reason.reasonName);
    }
    return "Ivyko klaida";
  }

  isFirstActive(i: number){
    if (i == 0) {
      return "active";
    }
  }

  openLoanPostDialog(loanId){
    const dialogConfig = new MatDialogConfig();
    

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: loanId
    }
    this.dialog.open(LoanPostDialogComponent, dialogConfig);
  }

  
}
