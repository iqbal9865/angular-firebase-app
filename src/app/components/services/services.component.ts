import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor( private serviceservices: ServiceService ) { }

  servicesItems: any = [];

  changeText: boolean = false;
  
  services() {
    this.serviceservices.services().subscribe((service) => {
      this.servicesItems = service.slice(0, 20);
    });
  }

  show: boolean = false;
  display() {
    this.show = true;
  }
  hide() {
    this.show = false;
  }
  ngOnInit(): void {
    this.services()
  }
}
