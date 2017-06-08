import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'invoice-table',
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.css']
})
export class InvoiceTableComponent implements OnInit {
  invoices : any[];

  constructor() { }

  ngOnInit() {
    this.invoices = INVOICES;

  }

  

}

const INVOICES = [
  {
    transactionType: 'Paymet',
    patientName: 'John',
    invoiceNumber: 888,
    date: '01/27/2017',
    balance: '100',
    amount: '100',
    method: 'check',
    dateReceived: '2/10/2017',
    note: 'this is a note'
  }
]
