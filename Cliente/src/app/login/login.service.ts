import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  base = environment.base;
  constructor(protected http: HttpClient) { }
  login(credentials) {
    return this.http.post(this.base + 'login', credentials);
  }
  logout() {
    localStorage.removeItem('token');
  }
}
