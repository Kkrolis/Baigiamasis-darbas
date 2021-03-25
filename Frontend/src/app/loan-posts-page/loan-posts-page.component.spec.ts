import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanPostsPageComponent } from './loan-posts-page.component';

describe('LoanPostsPageComponent', () => {
  let component: LoanPostsPageComponent;
  let fixture: ComponentFixture<LoanPostsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanPostsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanPostsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
