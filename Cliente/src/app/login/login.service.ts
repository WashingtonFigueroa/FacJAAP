import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import {HttpClient} from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  base = environment.base;
  constructor(protected http: HttpClient) { }
  usuario: any = null;
  privilegios: any = null;
  login(credentials) {
    return this.http.post(this.base + 'login', credentials)
                    .map( (response: any)=> {
                        this.usuario = response.usuario;
                        this.privilegios = response.privilegios;
                        return response;
                    });
  }
  logout() {
    localStorage.removeItem('token');
  }
}
