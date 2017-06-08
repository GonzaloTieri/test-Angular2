import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'invoice-post-modal',
  templateUrl: './invoice-post-modal.component.html',
  styleUrls: ['./invoice-post-modal.component.css']
})
export class InvoicePostModalComponent implements OnInit {
 public isModalShown:boolean = false;
 show: boolean;
  
  constructor() { }

  ngOnInit() {
    this.show  = true;
    this.showModal();
  }
public showModal():void {
    this.isModalShown = true;
  }
}
