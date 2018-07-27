import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturaCreateComponent } from './lectura-create.component';

describe('LecturaCreateComponent', () => {
  let component: LecturaCreateComponent;
  let fixture: ComponentFixture<LecturaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
