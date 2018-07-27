import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultaIndexComponent } from './multa-index.component';

describe('MultaIndexComponent', () => {
  let component: MultaIndexComponent;
  let fixture: ComponentFixture<MultaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
