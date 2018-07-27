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
}
