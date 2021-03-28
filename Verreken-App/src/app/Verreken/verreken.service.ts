import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerrekenService {
  expenses: Expense[] = []
  payments: Payment[] = []

  constructor() { }

  addExpense(name: string, amount: number): void {
    let expense: Expense = new Expense(name, amount);
    this.expenses.push(expense);
    this.expenses = this.eliminateDoubles(this.expenses);
    if (this.expenses.length > 1) {
      this.calculatePayments();
    }
  }

  getExpenses(): Observable<Expense[]> {
    return of(this.expenses);
  }

  getPayments(): Observable<Payment[]> {
    return of(this.payments);
  }

  calculatePayments(): void {
    this.payments = [];


    let valPayed = 0;
    this.expenses.forEach(element => {
      valPayed += element.amount;
    });
    let average = valPayed / this.expenses.length;

    let payers: Expense[] = [];
    let receivers: Expense[] = [];

    this.expenses.forEach(element => {
      let diff = element.amount - average;
      if (diff > 0) {
        receivers.push(new Expense(element.name, diff));
      }
      if (diff < 0) {
        payers.push(new Expense(element.name, -diff));
      }
    })

    while(receivers.length > 0 && payers.length > 0){
      let receiver = receivers[0];
      let payer = payers[0];
      
      if(payer.amount >= receiver.amount) {
        this.payments.push(new Payment(payer.name, receiver.amount, receiver.name));
        if (payer.amount > receiver.amount) {
          payers.push(new Expense(payer.name, payer.amount - receiver.amount));
        }
      }  else if (payer.amount < receiver.amount){
        this.payments.push(new Payment(payer.name, payer.amount, receiver.name));
        receivers.push(new Expense(receiver.name, receiver.amount - payer.amount));
      } 
      payers.splice(payers.indexOf(payer), 1);
      receivers.splice(receivers.indexOf(receiver), 1);
    }
  }

  eliminateDoubles(doubles: Expense[]): Expense[] {
    let singles: Expense[] = [];

    doubles.forEach(double => {
      let exists!: Expense;
      singles.forEach(single => {
        if (double.name == single.name){
          exists = single;
        }
      })
      if(exists == null){
        singles.push(double);
      } else {
        singles.splice(singles.indexOf(exists), 1);
        double.amount += exists.amount;
        singles.push(double);
      }
    })

    return singles;
  }
}

export class Expense {
  name!: string;
  amount!: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }
}

export class Payment {
  payer!: string;
  amount!: number;
  receiver!: string;

  constructor(payerName: string, amount: number, receiverName: string) {
    this.payer = payerName;
    this.amount = amount;
    this.receiver = receiverName;
  }
}