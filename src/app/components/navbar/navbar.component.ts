import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private cartservice: CartService, private authservice: AuthService) { }

  ngOnInit(): void {
  }

  getCart() {
    return this.cartservice.getItems();
  }

  isAuthenticated() {
    return this.authservice.isAuthenticated;
  }
  logout() {
    this.authservice.logout();
  }
}
