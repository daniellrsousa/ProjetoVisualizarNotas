import { Component } from '@angular/core';

@Component({
  selector: 'app-acao',
  imports: [],
  templateUrl: './acao.component.html',
  styleUrl: './acao.component.css'
})
export class AcaoComponent {
  acao = {
    titulo_editar: 'Editar',
    titulo_excluir: 'Excluir'
  }

}
