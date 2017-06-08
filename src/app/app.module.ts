import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceTableComponent } from './invoice/invoice-table/invoice-table.component';
import { InvoiceService } from './services/invoice.service';
import { InvoiceStatusFilterPipe } from './invoice/invoice-status-filter.pipe';
import { InvoiceNameOrIdFilterPipe } from './invoice/invoice-name-or-id-filter.pipe';
import { InvoiceAmountComponent } from './invoice/invoice-amount/invoice-amount.component';
import { Router } from '@angular/router';
import { InvoicePostModalComponent } from './invoice/invoice-post-modal/invoice-post-modal.component';
import { InvoiceNoteComponent } from './invoice/invoice-note/invoice-note.component';
import { ToastrService } from './services/toastr.service';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    InvoiceTableComponent,
    InvoiceStatusFilterPipe,
    InvoiceNameOrIdFilterPipe,
    InvoiceAmountComponent,
    InvoicePostModalComponent,
    InvoiceNoteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ModalModule.forRoot(),
  ],
  providers: [InvoiceService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
