import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuestionario1Component } from './cuestionario1.component';

describe('Cuestionario1Component', () => {
  let component: Cuestionario1Component;
  let fixture: ComponentFixture<Cuestionario1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cuestionario1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cuestionario1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
