import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: LoginForm = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.form);


  }
}

export interface LoginForm {
  email: string,
  password: string
}
