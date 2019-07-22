import { ServiceService } from './../../services/service.service';
import { Component, OnInit } from '@angular/core';
import { Service } from '../../services/service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  services$;
  selectedService: Service;
  constructor(private serviceService: ServiceService) {}
  ngOnInit() {
    this.getServices();
    this.resetService();
  }
  selectService(service) {
    this.selectedService = service;
    console.log(this.selectedService);
  }
  resetService() {
    const emptyService: Service = {
      id: null,
      title: '',
    };
    this.selectService(emptyService);
  }
  getServices() {
    this.services$ = this.serviceService.all();
  }
  saveService(service) {
    if (!service.id) {
      this.createService(service);
    }
    this.updateService(service);
  }
  createService(service) {
    this.serviceService.create(service).subscribe(result => {
      this.getServices();
      this.resetService();
    });
  }
  updateService(service) {
    this.serviceService.update(service).subscribe(result => {
      this.getServices();
      this.resetService();
    });
  }
  deleteService(service) {
    this.serviceService
      .delete(service.id)
      .subscribe(result => this.getServices());
  }
  cancel() {
    this.resetService();
  }
}
