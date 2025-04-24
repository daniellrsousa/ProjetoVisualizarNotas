import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gerenciamento-notas',
  imports: [CommonModule],
  templateUrl: './gerenciamento-notas.component.html',
  styleUrl: './gerenciamento-notas.component.css'
})
export class GerenciamentoNotasComponent {
  alunos = [
    {
      nome: 'João Silva',
      email: 'joao@exemplo.com',
      ano: 2,
      serie: 'F',
      exatas: 8,
      linguagens: 9,
      ciencias: 7,
      humanas: 6,
      media: 7.5
    },
    {
      nome: 'Maria Souza',
      email: 'maria@exemplo.com',
      ano: 3,
      serie: 'E',
      exatas: 9,
      linguagens: 8,
      ciencias: 10,
      humanas: 7,
      media: 8.5
    },
  ];
}
