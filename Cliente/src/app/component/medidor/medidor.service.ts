import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedidorService {
 
  base = environment.base;
  constructor(protected http: HttpClient) { }
  index() {
    return this.http.get(this.base + 'medidores');
  }
  show(id) {
      return this.http.get(this.base + 'medidores/' + id);
  }
  store(request) {
    return this.http.post(this.base + 'medidores', request);
  }
  update(request, id) {
      return this.http.put(this.base + 'medidores/' + id, request);
  }
  destroy(id) {
      return this.http.delete(this.base + 'medidores/' + id );
  }
}
