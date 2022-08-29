import { Component, OnInit } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  passwordMatch: boolean = true;
  isLoading: boolean = false;
  registerForm: registerDataModel = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  registration() {
    if (this.isLoading) return;

    this.isLoading = true;
    if (this.registerForm.password !== this.registerForm.confirmPassword) {
      this.passwordMatch = false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.registerForm.email, this.registerForm.password)
      .then((userCredential) => {
        console.log(userCredential);

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error message: ' + errorMessage);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
  ngOnInit(): void { }

}

export interface registerDataModel {
  username: string,
  email: string,
  password: string,
  confirmPassword: string
}
