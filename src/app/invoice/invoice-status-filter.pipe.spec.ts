import { InvoiceStatusFilterPipe } from './invoice-status-filter.pipe';

describe('InvoiceStatusFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new InvoiceStatusFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
