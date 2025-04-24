import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoNotasComponent } from './gerenciamento-notas.component';

describe('GerenciamentoNotasComponent', () => {
  let component: GerenciamentoNotasComponent;
  let fixture: ComponentFixture<GerenciamentoNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciamentoNotasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciamentoNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
