import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCuestionariosComponent } from './list-cuestionarios.component';

describe('ListCuestionariosComponent', () => {
  let component: ListCuestionariosComponent;
  let fixture: ComponentFixture<ListCuestionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCuestionariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCuestionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
