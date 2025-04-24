import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAlunoNotasComponent } from './cadastro-aluno-notas.component';

describe('CadastroAlunoNotasComponent', () => {
  let component: CadastroAlunoNotasComponent;
  let fixture: ComponentFixture<CadastroAlunoNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroAlunoNotasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroAlunoNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
