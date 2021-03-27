import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExpensesComponent } from './expenses/expenses.component';
import { MatTableModule } from '@angular/material/table';
import { PaymentsComponent } from './payments/payments.component';
import { ExpenseMakerComponent } from './expense-maker/expense-maker.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpensesComponent,
    PaymentsComponent,
    ExpenseMakerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
