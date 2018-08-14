import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./login.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginGroup: FormGroup;
  constructor(protected fb: FormBuilder,
              protected loginService: LoginService,
              protected route: ActivatedRoute,
              protected toastr: ToastrService,
              protected router: Router) {
      this.route.params.subscribe((res: any)=> {
        console.log(res);
        if(res.param === 'logout'){
         localStorage.removeItem('token');
         this.router.navigate(['/']);
        }
      });
      this.createForm();
  }

  ngOnInit() {
      if (localStorage.getItem('token')) {
          this.router.navigate(['/acceso/starter']);
      }
  }
  createForm() {
      this.loginGroup = this.fb.group({
          'correo' : new FormControl('',
              [Validators.required, Validators.email]),
          'password' : new FormControl('',
              [Validators.required, Validators.min(8)])
      });
  }
  login() {
    this.loginService.login(this.loginGroup.value)
        .subscribe((res: any) => {
            if (res.autenticado) {
                this.toastr.success('Ingresando al sistema');
                localStorage.setItem('token', res.token);
                this.router.navigate(['/acceso/starter']);
            }
        }, (error) => {
          this.toastr.error('Credenciales invalidas', 'Error de autenticacion');
          this.loginGroup.reset();
        });
  }

}
