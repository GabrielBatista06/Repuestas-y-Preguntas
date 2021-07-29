import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaPreguntaComponent } from './nueva-pregunta.component';

describe('NuevaPreguntaComponent', () => {
  let component: NuevaPreguntaComponent;
  let fixture: ComponentFixture<NuevaPreguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaPreguntaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
