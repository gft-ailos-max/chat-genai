import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  menuOptions = [
    { name: 'Histórico', value: 0, icon: 'pi pi-history' },
    { name: 'Módulos', value: 1, icon: 'pi pi-bars' },
];

menuOption: number = 0;


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

  opcoes: any[];
  selectedOption: any;

  constructor() {
    this.opcoes = [
      { label: 'Perfil', value: '1' },
      { label: 'Configurações', value: '2' },
    ];
  }

  isListVisible: boolean = false;

  toggleList() {
    this.isListVisible = !this.isListVisible;
  }

}
