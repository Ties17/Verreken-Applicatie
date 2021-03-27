import { Component, OnInit } from '@angular/core';
import { VerrekenService } from '../Verreken/verreken.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  constructor(public Verreken: VerrekenService) { }

  displayedColumns: string[] = ['payer', 'amount', 'receiver'];

  ngOnInit(): void {
  }

}
