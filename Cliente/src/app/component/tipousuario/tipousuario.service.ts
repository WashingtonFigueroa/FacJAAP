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
    return this.http.get(this.base + 'tipousuarios');
  }
  show(id) {
      return this.http.get(this.base + 'tipousuarios/' + id);
  }
  store(request) {
    return this.http.post(this.base + 'tipousuarios', request);
  }
  update(request, id) {
      return this.http.put(this.base + 'tipousuarios/' + id, request);
  }
  destroy(id) {
      return this.http.delete(this.base + 'tipousuarios/' + id );
  }
}