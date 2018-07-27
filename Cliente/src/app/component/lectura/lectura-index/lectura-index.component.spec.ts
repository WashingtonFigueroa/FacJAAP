import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturaIndexComponent } from './lectura-index.component';

describe('LecturaIndexComponent', () => {
  let component: LecturaIndexComponent;
  let fixture: ComponentFixture<LecturaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
