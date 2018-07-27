import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipousuarioService {
  base = environment.base;
  constructor(protected http: HttpClient) { }

  index() {
    return this.http.get(this.base + 'tipo_usuarios');
  }
  show(id) {
      return this.http.get(this.base + 'tipo_usuarios/' + id);
  }
  store(request) {
    return this.http.post(this.base + 'tipo_usuarios', request);
  }
  update(request, id) {
      return this.http.put(this.base + 'tipo_usuarios/' + id, request);
  }
  destroy(id) {
      return this.http.delete(this.base + 'tipo_usuarios/' + id );
  }
}