import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  base = environment.base;
  constructor(protected http: HttpClient) { }
  index() {
    return this.http.get(this.base + 'servicios');
  }
    exporarExcel_servicios() {
        return this.http.get(this.base + 'exporarExcel_servicios');
    }
  indexPerPage(url) {
    return this.http.get( url );
  }
  listaServicios() {
    return this.http.get(this.base + 'lista_servicios');
  }
  show(id) {
      return this.http.get(this.base + 'servicios/' + id);
  }
  store(request) {
    return this.http.post(this.base + 'servicios', request);
  }
  update(request, id) {
      return this.http.put(this.base + 'servicios/' + id, request);
  }
  destroy(id) {
      return this.http.delete(this.base + 'servicios/' + id );
  }
}
