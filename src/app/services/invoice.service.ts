import { Injectable } from '@angular/core';
import { IInvoice } from '../models/invoice.model';
// Los siguientes 3 son para el servicio http para request a APIs
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
// Los dos siguiente son para el menejo de error y que hacer cuando sale bien 
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class InvoiceService {
  private _getInvoicesUrl = "http://www.mocky.io/v2/593958ee120000ef0da675d8";

  constructor(private _http : Http) { }

  getInvoices(): Observable<IInvoice[]> {
    return this._http.get(this._getInvoicesUrl)
          .map((response : Response ) => <IInvoice[]> response.json())
          .catch(this.handleError);  
  }

  invoicePost(invoice : IInvoice) : Observable<any> {
    return this._http.get("http://www.mocky.io/v2/5938361a110000b21a6bb973")
      .map((response : Response) => <any> response.json())
      .do(function(data){

        if(data.success == 'success') {
//          invoice.transactionType = "Paid";
        }
        
      }
        //data => console.log('All: ' + JSON.stringify(data))
        )
      .catch(this.handleError);
  }

  getInvoice(number:number) : any{
    return INVOICES.find(invoice => invoice.invoiceNumber === number );
  }

  updateAmount(invoice : IInvoice) {
    //this.getInvoice()
  }

  private handleError(error : Response ) {
    //console.log(error);
    return Observable.throw(error.json().error || 'Server Error');
  }

}

const INVOICES  = [
  {
    invoiceId: 1,
    transactionType: 'Paid',
    patientName: 'John',
    invoiceNumber: 88123,
    date: '01/27/2017',
    balance: 100,
    amount: 100,
    method: 'check',
    dateReceived: '2/10/2017',
    note: 'this is a note'
  },
  {
    invoiceId: 2,
    transactionType: 'Outstanding',
    patientName: 'John',
    invoiceNumber: 8814,
    date: '01/27/2017',
    balance: 100,
    amount: 100,
    method: 'check',
    dateReceived: '2/10/2017',
    note: 'this is a note'
  },
   {
    invoiceId: 3,
    transactionType: 'Paid',
    patientName: 'Petter',
    invoiceNumber: 8845,
    date: '01/27/2017',
    balance: 100,
    amount: 100,
    method: 'check',
    dateReceived: '2/10/2017',
    note: 'this is a note'
  },
   {
    invoiceId: 4,
    transactionType: 'Outstanding',
    patientName: 'Lana',
    invoiceNumber: 88456,
    date: '01/27/2017',
    balance: 100,
    amount: 100,
    method: 'check',
    dateReceived: '2/10/2017',
    note: 'this is a note'
  },
]
