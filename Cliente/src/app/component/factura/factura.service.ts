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

}
