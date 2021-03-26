import { Component, OnInit } from '@angular/core';
import { LoanPostService } from '../services/loan-post.service';

@Component({
  selector: 'app-loan-posts-page',
  templateUrl: './loan-posts-page.component.html',
  styleUrls: ['./loan-posts-page.component.css']
})
export class LoanPostsPageComponent implements OnInit {

  posts: any;
  tableHeaders = ['Id', 'Kiekis', 'Paskolos tikslas', 'Skelbimo idejimo data', 'Palūkanų kiekis', 'Kokiam laikotarpiui', ''];



  constructor(public service: LoanPostService) { }

  ngOnInit(): void {
    this.service.getPosts()
    .subscribe((respose: Response) => {
      //console.log(data);
      this.posts = respose;
  });
}
}
