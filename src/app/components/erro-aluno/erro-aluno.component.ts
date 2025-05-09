import { Component } from '@angular/core';
import { delay } from 'rxjs';	

@Component({
  selector: 'app-erro-aluno',
  imports: [],
  templateUrl: './erro-aluno.component.html',
  styleUrl: './erro-aluno.component.css'
})
export class ErroAlunoComponent {
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
