export interface IInvoice {
    invoiceId: number;
    transactionType: string
    patientName: string;
    invoiceNumber: number;
    date: string;
    balance: number;
    amount:number
    method: string,
    dateReceived:string;
    note: string;
}

export class Invoice implements IInvoice {
    constructor(
        public invoiceId: number,
        public transactionType: string,
        public patientName: string,
        public invoiceNumber: number,
        public date: string,
        public balance: number,
        public amount:number,
        public method: string,
        public dateReceived:string,
        public note: string
    ){}
}