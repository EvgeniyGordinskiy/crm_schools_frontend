import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSendedComponent } from './email-sent.component';

describe('EmailSendedComponent', () => {
  let component: EmailSendedComponent;
  let fixture: ComponentFixture<EmailSendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailSendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
