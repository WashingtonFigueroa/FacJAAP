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
  login(credentials) {
    return this.http.post(this.base + 'login', credentials)
                    .map( (response: any)=> {
                        localStorage.setItem('jaap-usuario', JSON.stringify(response.usuario))
                        localStorage.setItem('jaap-privilegios', JSON.stringify(response.privilegios))
                        return response;
                    });
  }
  getUsuario(){
      if (localStorage.getItem('token')) {
          return JSON.parse(localStorage.getItem('jaap-usuario'));
      }
  }
  getPrivilegios(){
      if (localStorage.getItem('token')) {
          return JSON.parse(localStorage.getItem('jaap-privilegios'));
      }
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('jaap-usuario');
    localStorage.removeItem('jaap-privilegios');
  }
}
