import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Aluno {
  nome: string;
  email: string;
  ano: number;
  serie: string;
  exatas: number;
  linguagens: number;
  ciencias: number;
  humanas: number;
  media: number;
}

@Component({
  selector: 'app-gerenciamento-notas',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './gerenciamento-notas.component.html',
  styleUrls: ['./gerenciamento-notas.component.css']
})
export class GerenciamentoNotasComponent implements OnInit {
  alunos: Aluno[] = [
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
    // Adicione mais alunos para testar a paginação
  ];
  
  alunosExibidos: Aluno[] = [];
  itensPorPagina = 5;
  paginaAtual = 1;
  totalPaginas!: number;
  paginas: number[] = [];

  ngOnInit() {
    this.calcularPaginas();
  }

  calcularPaginas() {
    this.totalPaginas = Math.ceil(this.alunos.length / this.itensPorPagina);
    this.paginas = Array.from({ length: this.totalPaginas }, (_, i) => i + 1);
    this.atualizarPagina();
  }

  atualizarPagina() {
    this.calcularPaginas();
    this.mudarPagina(1);
  }

  mudarPagina(pagina: number | string) {
    if (pagina === -1) {
      this.paginaAtual = Math.max(1, this.paginaAtual - 1);
    } else if (pagina === this.totalPaginas + 1) {
      this.paginaAtual = Math.min(this.totalPaginas, this.paginaAtual + 1);
    } else {
      this.paginaAtual = pagina as number;
    }

    this.exibirAlunos();
  }

  exibirAlunos() {
    const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;
    this.alunosExibidos = this.alunos.slice(inicio, fim);
  }
}
