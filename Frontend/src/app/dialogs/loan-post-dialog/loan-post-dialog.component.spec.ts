import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanPostDialogComponent } from './loan-post-dialog.component';

describe('LoanPostDialogComponent', () => {
  let component: LoanPostDialogComponent;
  let fixture: ComponentFixture<LoanPostDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanPostDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanPostDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
