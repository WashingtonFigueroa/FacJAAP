import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultaEditComponent } from './multa-edit.component';

describe('MultaEditComponent', () => {
  let component: MultaEditComponent;
  let fixture: ComponentFixture<MultaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
