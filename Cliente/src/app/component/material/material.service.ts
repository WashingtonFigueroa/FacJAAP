import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

    base = environment.base;
    constructor(protected http: HttpClient) { }

    index() {
        return this.http.get(this.base + 'materiales');
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
}
