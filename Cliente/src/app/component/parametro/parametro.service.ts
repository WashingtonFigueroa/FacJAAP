import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParametroService {

  base = environment.base;
  constructor(protected http: HttpClient) { }

  index() {
    return this.http.get(this.base + 'parametros');
  }
  show(id) {
      return this.http.get(this.base + 'parametros/' + id);
  }
  store(request) {
    return this.http.post(this.base + 'parametros', request);
  }
  update(request, id) {
      return this.http.put(this.base + 'parametros/' + id, request);
  }
  destroy(id) {
      return this.http.delete(this.base + 'parametros/' + id );
  }
}
