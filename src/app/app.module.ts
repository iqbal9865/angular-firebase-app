import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';
import { CartsComponent } from './components/carts/carts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthModule } from './auth/auth.module';
import { ServicesComponent } from './components/services/services.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './components/posts/posts.component';
import { FormsModule } from '@angular/forms';
import { CommentsComponent } from './components/comments/comments.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExtraComponent } from './components/extra/extra.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookComponent,
    CartsComponent,
    NavbarComponent,
    ServicesComponent,
    PostsComponent,
    CommentsComponent,
    ExtraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
