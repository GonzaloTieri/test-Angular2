import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../services/invoice.service';
import { IInvoice } from '../models/invoice.model'
import { ToastrService } from '../services/toastr.service'

@Component({
  selector: 'invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  errorMessage : string;
  invoices : IInvoice[];
  searchBySelected : string;
  invoiceStatusSelected : string;
  searchText : string;
  postResult: any;

  constructor(private _invoiceService : InvoiceService, private _toastrService : ToastrService) { }

  ngOnInit() {
    this.searchText = '';
    this.searchBySelected = 'Name';
    this.invoiceStatusSelected = 'Outstanding';
    //this.invoices = INVOICES;
    let self =  this;
    this._invoiceService.getInvoices()
      .subscribe( function(data){
              self.invoices = data;
            },
            function(error) {
              self.errorMessage = <any>error;
              self._toastrService.error("Sorry, some", 'Error' );
              console.log(self.errorMessage);
            });

  }

  invoicePost(invoice : IInvoice) : void {
    let self =  this;
     this._invoiceService.invoicePost(invoice)
            .subscribe( function(data){
              self.postResult = data;
              console.log(data.success);
              if(data.success == 'success') {
                self._toastrService.success('The Paiment was registered','Register');
                // No lo deberia hacer aca
                self.invoices = self.invoices.filter(item => item !== invoice);
                invoice.transactionType = "Paid";
                self.invoices.push(invoice);
                //

              }
              if(data.error){
                self._toastrService.error("ERROR", 'Error' );
              }
            },
            function(error) {
              self.errorMessage = <any>error;
              self._toastrService.error("Sorry, some", 'Error' );
              console.log(self.errorMessage);
            });
  }


}


const INVOICES : IInvoice[] = [
  {
    "invoiceId": 1,
    "transactionType": "Paid",
    "patientName": "John",
    "invoiceNumber": 88123,
    "date": "01/27/2017",
    "balance": 100,
    "amount": 100,
    "method": "check",
    "dateReceived": "2/10/2017",
    "note": "this is a note"
  },
  {
    "invoiceId": 2,
    "transactionType": "Outstanding",
    "patientName": "John",
    "invoiceNumber": 8814,
    "date": "01/27/2017",
    "balance": 100,
    "amount": 100,
    "method": "check",
    "dateReceived": "2/10/2017",
    "note": "this is a note"
  },
   {
    "invoiceId": 3,
    "transactionType": "Paid",
    "patientName": "Petter",
    "invoiceNumber": 8845,
    "date": "01/27/2017",
    "balance": 100,
    "amount": 100,
    "method": "check",
    "dateReceived": "2/10/2017",
    "note": "this is a note"
  },
   {
    "invoiceId": 4,
    "transactionType": "Outstanding",
    "patientName": "Lana",
    "invoiceNumber": 88456,
    "date": "01/27/2017",
    "balance": 100,
    "amount": 100,
    "method": "check",
    "dateReceived": "2/10/2017",
    "note": "this is a note"
  }
]
