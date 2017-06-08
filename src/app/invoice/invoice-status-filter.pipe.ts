import { Pipe, PipeTransform } from '@angular/core';
import { IInvoice } from '../models/invoice.model';

@Pipe({
  name: 'invoiceStatusFilter'
})
export class InvoiceStatusFilterPipe implements PipeTransform {

  transform(value: IInvoice[], filterBy?: string): IInvoice[] {
    return filterBy ? value.filter((invoice: IInvoice) => invoice.transactionType.indexOf(filterBy) !== -1 ) : value;
  }

}
