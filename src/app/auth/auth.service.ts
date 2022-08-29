import { Injectable } from '@angular/core';
import { LoginForm } from './login/login.component';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { registerDataModel } from './register/register.component';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isLoading: boolean = false;
  passwordMatch: boolean = true;
  isAuthenticated: boolean = false;

  login(LoginForm: LoginForm) {
    if (this.isLoading) return;
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, LoginForm.email, LoginForm.password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.isAuthenticated = true;
        this.router.navigate([''])
        console.log(user.email + ' login successfully');
      })
      .catch((error) => {
        const errorMessage = error.message;
        this.isAuthenticated = false;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  register(registerForm: registerDataModel) {
    if (this.isLoading) return;

    this.isLoading = true;
    if (registerForm.password !== registerForm.confirmPassword) {
      this.passwordMatch = false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, registerForm.email, registerForm.password)
      .then((userCredential) => {
        console.log(userCredential);
        this.isAuthenticated = true;
        this.router.navigate([''])
      })
      .catch((error) => {
        const errorMessage = error.message;
        this.isAuthenticated = false;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(['login'])
      this.isAuthenticated = false;
    }).catch((error) => {

    })
  }
}
