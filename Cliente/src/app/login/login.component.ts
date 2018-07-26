import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginGroup: FormGroup;
  constructor(protected fb: FormBuilder,
              protected loginService: LoginService,
              protected router: Router) {
      this.createForm();
  }

  ngOnInit() {
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
                localStorage.setItem('token', res.token);
                this.router.navigate(['/starter']);
            } else {
                this.loginGroup.reset();
            }
        });
  }

}
