import { InvoiceNameOrIdFilterPipe } from './invoice-name-or-id-filter.pipe';

describe('InvoiceNameOrIdFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new InvoiceNameOrIdFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
