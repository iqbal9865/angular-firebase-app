import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  registerForm: registerDataModel = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  registration() {
    this.authservice.register(this.registerForm);
  }

  isLoading() {
    return this.authservice.isLoading;
  }

  ngOnInit(): void { }

}

export interface registerDataModel {
  username: string,
  email: string,
  password: string,
  confirmPassword: string
}
