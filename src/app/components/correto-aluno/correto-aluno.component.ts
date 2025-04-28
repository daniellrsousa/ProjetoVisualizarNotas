import { Component } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-correto-aluno',
  imports: [],
  templateUrl: './correto-aluno.component.html',
  styleUrl: './correto-aluno.component.css'
})


export class CorretoAlunoComponent {
  tela: string = '';
  visible: boolean = false;
  

  abrir(tela: string): void {
    this.tela = tela;
    this.visible = true;
  }

  fechar(): void {
    this.visible = false;
    delay(1000);
  }
}
