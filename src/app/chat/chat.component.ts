import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {


  historico: boolean = true;
  modulo: boolean = false;
  mensagemHistorico() {
    this.historico = true;
    this.modulo = false;
  }
  mensagemModulos() {
    this.modulo = true;
    this.historico = false;
  }
}