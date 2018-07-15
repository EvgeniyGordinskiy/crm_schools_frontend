import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSpinnerComponent } from './main-spinner.component';

describe('MainSpinnerComponent', () => {
  let component: MainSpinnerComponent;
  let fixture: ComponentFixture<MainSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
