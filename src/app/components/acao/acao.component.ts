import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-acao',
  imports: [],
  templateUrl: './acao.component.html',
  styleUrl: './acao.component.css'
})
export class AcaoComponent {

  constructor(private dialog: MatDialog) {}

  editarAluno() {
    this.dialog.open(EditarComponent, {
      position: { right: '0' },
      width: '400px',
      height: '1000px'
    });
  }
}
