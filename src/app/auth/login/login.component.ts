import { Component, OnInit } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  loginSuccess: string = '';
  loginError: string = '';

  LoginForm: LoginForm = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    if (this.isLoading) return;
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.LoginForm.email, this.LoginForm.password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.loginSuccess = user.email + ' login successfully';
        this.loginError = '';
        console.log(user.email + ' login successfully');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.loginError = errorMessage;
        this.loginSuccess = '';
        console.log('error message: ' + errorMessage);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}

export interface LoginForm {
  email: string,
  password: string
}
