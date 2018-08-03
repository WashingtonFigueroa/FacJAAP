import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LecturaService {
  base = environment.base;
  constructor(protected http: HttpClient) { }
  index() {
    return this.http.get(this.base + 'lecturas');
  }
  indexPerPage(url) {
    return this.http.get( url );
}
  show(id) {
      return this.http.get(this.base + 'lecturas/' + id);
  }
  store(request) {
    return this.http.post(this.base + 'lecturas', request);
  }
  update(request, id) {
      return this.http.put(this.base + 'lecturas/' + id, request);
  }
  destroy(id) {
      return this.http.delete(this.base + 'lecturas/' + id );
  }
  pagar(idlectura) {
      const token = localStorage.getItem('token');
      return this.http.get(this.base + 'pagar/' + idlectura + '?token=' + token);
  }
  verFactura(idlectura) {
      return this.http.get(this.base + 'ver_factura/' + idlectura);
  }
  searchLecturaAnterior(idmedidor) {
      return this.http.get(this.base + 'search_lectura_anterior/' + idmedidor);
  }
}
