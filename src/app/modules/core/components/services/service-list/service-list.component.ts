import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Service } from '../../../services/service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss'],
})
export class ServiceListComponent implements OnInit {
  @Input() services: Service[];
  @Input() readonly = true;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
