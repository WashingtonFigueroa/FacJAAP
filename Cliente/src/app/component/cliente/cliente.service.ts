import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  base = environment.base;
  constructor(protected http: HttpClient) { }
  index() {
    return this.http.get(this.base + 'clientes');
  }
  indexPerPage(url) {
    return this.http.get( url );
}
  show(id) {
      return this.http.get(this.base + 'clientes/' + id);
  }
  store(request) {
    return this.http.post(this.base + 'clientes', request);
  }
  update(request, id) {
      return this.http.put(this.base + 'clientes/' + id, request);
  }
  destroy(id) {
      return this.http.delete(this.base + 'clientes/' + id );
  }
  listaClientes() {
      return this.http.get(this.base + 'lista_clientes');
  }

}
