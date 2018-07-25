import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
@Injectable()
export class ProveedorService {

  base = environment.base;
  constructor(protected http: HttpClient) { }

  index() {
    return this.http.get(this.base + 'proveedores');
  }
  show(id) {
      return this.http.get(this.base + 'proveedores/' + id);
  }
  store(request) {
    return this.http.post(this.base + 'proveedores', request);
  }
  update(request, id) {
      return this.http.put(this.base + 'proveedores/' + id, request);
  }
  destroy(id) {
      return this.http.delete(this.base + 'proveedores/' + id );
  }
}