import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  registerForm: registerDataModel = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  registration() {
    console.log(this.registerForm);
  }
  ngOnInit(): void {}

}

export interface registerDataModel {
  username: string,
  email: string,
  password: string,
  confirmPassword: string
}
