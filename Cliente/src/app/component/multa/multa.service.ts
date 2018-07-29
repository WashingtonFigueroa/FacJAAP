import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MultaService {
  base = environment.base;
  constructor(protected http: HttpClient) { }
  index() {
    return this.http.get(this.base + 'multas');
  }
   indexPerPage(url) {
     return this.http.get( url );
   }
  show(id) {
      return this.http.get(this.base + 'multas/' + id);
  }
  store(request) {
    return this.http.post(this.base + 'multas', request);
  }
  update(request, id) {
      return this.http.put(this.base + 'multas/' + id, request);
  }
  destroy(id) {
      return this.http.delete(this.base + 'multas/' + id );
  }
}
