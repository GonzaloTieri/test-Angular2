import { Pipe, PipeTransform } from '@angular/core';
import { IInvoice } from '../models/invoice.model';

@Pipe({
  name: 'invoiceNameOrIdFilter'
})
export class InvoiceNameOrIdFilterPipe implements PipeTransform {

  transform(value: IInvoice[], filterBy: any): any {
    if (filterBy.field === 'Name'){
      return filterBy.stringSearch ? value.filter((invoice: IInvoice) => invoice.patientName.toLowerCase().indexOf(filterBy.stringSearch.toLowerCase()) !== -1 ) : value;
    }
    if (filterBy.field === 'Invoice'){
      return filterBy.stringSearch ? value.filter((invoice: IInvoice) => invoice.invoiceNumber.toString().indexOf(filterBy.stringSearch) !== -1 ) : value;
    }
  }

}
