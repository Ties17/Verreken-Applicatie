import { Component, OnInit } from '@angular/core';
import { VerrekenService } from '../Verreken/verreken.service';


@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  constructor(public Verreken: VerrekenService) { }

  displayedColumns: string[] = ['name', 'amount'];

  ngOnInit(): void {
  }

}
