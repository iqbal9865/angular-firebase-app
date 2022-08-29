import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-firebase-app-demo';

  constructor() { }

  ngOnInit():void {
   initializeApp(firebaseConfig);
  }

}
