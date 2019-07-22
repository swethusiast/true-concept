import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Service } from '../../../services/service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss'],
})
export class ServiceDetailsComponent implements OnInit {
  currentService: Service;
  @Output() saved = new EventEmitter();
  @Input()
  set service(value) {
    this.currentService = Object.assign({}, value);
  }
  constructor() {}

  ngOnInit() {}
}
