import { Component, OnInit, Input } from '@angular/core';
import { IInvoice } from '../../models/invoice.model';

@Component({
  selector: 'invoice-note',
  templateUrl: './invoice-note.component.html',
  styleUrls: ['./invoice-note.component.css']
})
export class InvoiceNoteComponent implements OnInit {
  @Input() invoice : IInvoice; 
  newNote : string;

  constructor() { }

  ngOnInit() {
    this.newNote = this.invoice.note;
  }



}
