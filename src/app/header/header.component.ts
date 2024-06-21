import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  opcoes: any[];
  selectedOption: any;

  constructor() {
    this.opcoes = [
      { label: 'Perfil', value: '1' },
      { label: 'Sair', value: '2' }
    ];
  }

  ngOnInit(): void {}
}
