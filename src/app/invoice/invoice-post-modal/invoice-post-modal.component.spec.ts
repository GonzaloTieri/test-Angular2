import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePostModalComponent } from './invoice-post-modal.component';

describe('InvoicePostModalComponent', () => {
  let component: InvoicePostModalComponent;
  let fixture: ComponentFixture<InvoicePostModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicePostModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicePostModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
