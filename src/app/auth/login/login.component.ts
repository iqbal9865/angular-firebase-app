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
  errorMessage: string = '';
  constructor(private authservice: AuthService) { }

  async login() {
    await this.authservice.login(this.LoginForm)
    this.findError()
  }

  isLoading() {
    return this.authservice.isLoading;
  }

  findError() {
    this.errorMessage = this.authservice.errorMessage;
  }

  ngOnInit(): void {

  }

}

export interface LoginForm {
  email: string,
  password: string
}
