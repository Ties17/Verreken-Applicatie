import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseMakerComponent } from './expense-maker.component';

describe('ExpenseMakerComponent', () => {
  let component: ExpenseMakerComponent;
  let fixture: ComponentFixture<ExpenseMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseMakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
