import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroAlunoComponent } from './erro-aluno.component';

describe('ErroAlunoComponent', () => {
  let component: ErroAlunoComponent;
  let fixture: ComponentFixture<ErroAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErroAlunoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErroAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
