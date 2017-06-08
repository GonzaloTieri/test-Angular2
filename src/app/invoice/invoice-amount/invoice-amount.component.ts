import { Component, OnInit, Input } from '@angular/core';
import { IInvoice } from '../../models/invoice.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'invoice-amount',
  templateUrl: './invoice-amount.component.html',
  styleUrls: ['./invoice-amount.component.css']
})
export class InvoiceAmountComponent implements OnInit {

  @Input() invoice: IInvoice;
  editable: boolean;
  amount: FormControl;
  newAmountForm: FormGroup;

  constructor(private _invoiceService : InvoiceService) { }

  ngOnInit() {
    this.editable = true;
    this.amount = new FormControl('', Validators.required);
    this.newAmountForm = new FormGroup(
      { amount: this.amount }
    );
  }

  canEdit(val): void {
    this.editable = val;
  }

  saveAmount(value): void {
    this.invoice.amount = value.amount; // esto deberia hacer otra cosa.
    this.editable = true;

  }

}

