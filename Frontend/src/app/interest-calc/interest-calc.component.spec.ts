import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestCalcComponent } from './interest-calc.component';

describe('InterestCalcComponent', () => {
  let component: InterestCalcComponent;
  let fixture: ComponentFixture<InterestCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
