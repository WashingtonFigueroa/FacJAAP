import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {LoginService} from "../login/login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(protected router: Router,
              protected loginService: LoginService) {

  }
  canActivate(

    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let privilegios = [];
    privilegios = this.loginService.getPrivilegios();
    if (localStorage.getItem('token')) {
        if (state.url === '/acceso/starter'){
            return true;
        }
        if (privilegios !== null) {
            for(let i = 0; i< privilegios.length; i++) {
              if ('/acceso/component/'+privilegios[i].ruta+'/listar' === state.url)  {
                   return privilegios[i].estado === 1 ? true : false;
              }
            }
        }
    }
    this.router.navigate(['/acceso/login']);
    return false;
  }
}
