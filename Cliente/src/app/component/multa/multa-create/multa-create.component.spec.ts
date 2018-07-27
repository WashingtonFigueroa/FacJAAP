import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultaCreateComponent } from './multa-create.component';

describe('MultaCreateComponent', () => {
  let component: MultaCreateComponent;
  let fixture: ComponentFixture<MultaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
