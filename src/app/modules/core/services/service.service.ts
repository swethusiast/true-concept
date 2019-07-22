import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  model = 'services';

  constructor(private httpClient: HttpClient) {}
  getUrl() {
    return `${BASE_URL}${this.model}`;
  }
  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }
  all() {
    return this.httpClient.get(this.getUrl());
  }
  create(service) {
    return this.httpClient.post(this.getUrl(), service);
  }
  update(service) {
    return this.httpClient.patch(this.getUrlForId(service.id), service);
  }
  delete(serviceId) {
    return this.httpClient.delete(this.getUrlForId(serviceId));
  }
}
