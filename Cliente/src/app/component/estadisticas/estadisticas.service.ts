import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  base = environment.base;
  constructor(protected http: HttpClient) { }
  
  total_egresos() {
    return this.http.get(this.base + 'total_egresos');
  }

  total_ingresos() {
    return this.http.get(this.base + 'total_ingresos');
  }

}
