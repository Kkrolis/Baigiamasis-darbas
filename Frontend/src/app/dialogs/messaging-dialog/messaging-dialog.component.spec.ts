import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingDialogComponent } from './messaging-dialog.component';

describe('MessagingDialogComponent', () => {
  let component: MessagingDialogComponent;
  let fixture: ComponentFixture<MessagingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagingDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
