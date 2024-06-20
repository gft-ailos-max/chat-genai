import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  formGroup: FormGroup;
  opcoes: { name: string, code: string }[] = [];

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      selectedOption: [null]
    });

    this.opcoes = [
      { name: 'Opção 1', code: '1' },
      { name: 'Opção 2', code: '2' },
      { name: 'Opção 3', code: '3' },
      { name: 'Opção 4', code: '4' },
      { name: 'Opção 5', code: '5' }
    ];
  }

  ngOnInit(): void {}
}
