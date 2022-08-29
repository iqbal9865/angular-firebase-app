import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  LoginForm: LoginForm = {
    email: '',
    password: ''
  }

  constructor(private authservice: AuthService) { }

  login() {
    this.authservice.login(this.LoginForm)
  }

  isLoading() {
    return this.authservice.isLoading;
  }

  ngOnInit(): void {

  }

}

export interface LoginForm {
  email: string,
  password: string
}
