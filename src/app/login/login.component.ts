import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    loginControl: new FormControl('', Validators.required),
    senhaControl: new FormControl('', Validators.required),
    manterConectado: new FormControl(false),
  });

  constructor() {

   }

  ngOnInit() {
  }


}
