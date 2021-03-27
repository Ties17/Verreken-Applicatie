import { Component, OnInit } from '@angular/core';
import { VerrekenService } from '../Verreken/verreken.service';
import { FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-expense-maker',
  templateUrl: './expense-maker.component.html',
  styleUrls: ['./expense-maker.component.css']
})
export class ExpenseMakerComponent implements OnInit {

  constructor(public Verreken: VerrekenService, private fb: FormBuilder) { }
  nameError!: string;
  amountError!: string;

  nameControl = new FormControl('', [
    Validators.required
  ]);
  amountControl = new FormControl('', [
    Validators.required,
    Validators.min(0.01)
  ]);

  ngOnInit(): void {
  }

  addExpense(): void {
    if(this.nameControl.valid && this.amountControl.valid){
      this.Verreken.addExpense(this.nameControl.value, this.amountControl.value);
    }
  }
}
