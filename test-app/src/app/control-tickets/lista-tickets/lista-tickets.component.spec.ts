import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTicketsComponent } from './lista-tickets.component';

describe('ListaTicketsComponent', () => {
  let component: ListaTicketsComponent;
  let fixture: ComponentFixture<ListaTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
