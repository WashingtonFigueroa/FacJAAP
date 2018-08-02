import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  base = environment.base;
  constructor(protected http: HttpClient) { }
  index() {
    return this.http.get(this.base + 'materiales');
  }
  indexPerPage(url) {
    return this.http.get( url );
}
  show(id) {
      return this.http.get(this.base + 'materiales/' + id);
  }
  store(request) {
    return this.http.post(this.base + 'materiales', request);
  }
  update(request, id) {
      return this.http.put(this.base + 'materiales/' + id, request);
  }
  destroy(id) {
      return this.http.delete(this.base + 'materiales/' + id );
  }
  listaMateriales() {
      return this.http.get(this.base + 'lista_materiales');
  }

}
