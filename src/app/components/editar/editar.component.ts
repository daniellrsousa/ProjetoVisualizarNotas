import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';	

@Component({
  selector: 'app-editar',
  imports: [],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {

  constructor(private dialog: MatDialog) {}
  fechar(){
    this.dialog.closeAll();
  }
  
}
