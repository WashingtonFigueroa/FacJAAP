import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidorIndexComponent } from './medidor-index.component';

describe('MedidorIndexComponent', () => {
  let component: MedidorIndexComponent;
  let fixture: ComponentFixture<MedidorIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedidorIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedidorIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
