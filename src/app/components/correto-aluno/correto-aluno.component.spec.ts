import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorretoAlunoComponent } from './correto-aluno.component';

describe('CorretoAlunoComponent', () => {
  let component: CorretoAlunoComponent;
  let fixture: ComponentFixture<CorretoAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorretoAlunoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorretoAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
