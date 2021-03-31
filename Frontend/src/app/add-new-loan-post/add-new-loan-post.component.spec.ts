import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewLoanPostComponent } from './add-new-loan-post.component';

describe('AddNewLoanPostComponent', () => {
  let component: AddNewLoanPostComponent;
  let fixture: ComponentFixture<AddNewLoanPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewLoanPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewLoanPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
