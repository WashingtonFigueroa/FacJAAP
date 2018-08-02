import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  base = environment.base;
  constructor(protected http: HttpClient) { }

  ventasMes(start, end) {
    return this.http.get(this.base + 'ventas_mes/' + start + '/' + end);
  }

  index() {
    return this.http.get(this.base + 'factura_ventas');
  }
  indexPerPage(url) {
    return this.http.get( url );
  }
  show(id) {
      return this.http.get(this.base + 'factura_ventas/' + id);
  }
  store(request) {
    return this.http.post(this.base + 'factura_ventas', request);
  }
  update(request, id) {
      return this.http.put(this.base + 'factura_ventas/' + id, request);
  }
  destroy(id) {
      return this.http.delete(this.base + 'factura_ventas/' + id );
  }
  listaClientes() {
      return this.http.get(this.base + 'lista_clientes');
  }

}
