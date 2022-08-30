import { Injectable } from '@angular/core';
import { LoginForm } from './login/login.component';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { registerDataModel } from './register/register.component';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private router: Router, private cartservice: CartService ) { }

  isLoading: boolean = false;
  passwordMatch: boolean = true;
  isAuthenticated: boolean = false;
  errorMessage: string = '';

  async login(LoginForm: LoginForm) {
    if (this.isLoading) return;
    this.isLoading = true;
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, LoginForm.email, LoginForm.password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.isAuthenticated = true;
        this.router.navigate([''])
      })
      .catch((error) => {
        const errorMessage = error.message;
        this.errorMessage = errorMessage;
        this.isAuthenticated = false;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  async register(registerForm: registerDataModel) {
    if (this.isLoading) return;
    this.isLoading = true;
    if (registerForm.password !== registerForm.confirmPassword) {
      this.passwordMatch = false;
      return;
    }

    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, registerForm.email, registerForm.password)
      .then((userCredential) => {
        console.log(userCredential);
        this.isAuthenticated = true;
        this.router.navigate([''])
      })
      .catch((error) => {
        const errorMessage = error.message;
        this.errorMessage = errorMessage;
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
      this.cartservice.clearCart();
    }).catch((error) => {
      const errorMessage = error.message;
      this.errorMessage = errorMessage;
    })
  }
}
