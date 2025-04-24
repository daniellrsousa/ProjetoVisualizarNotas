import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro-aluno-notas',
  imports: [RouterLink],
  templateUrl: './cadastro-aluno-notas.component.html',
  styleUrl: './cadastro-aluno-notas.component.css'
})
export class CadastroAlunoNotasComponent {
  tela: string = 'cadastro';
}
