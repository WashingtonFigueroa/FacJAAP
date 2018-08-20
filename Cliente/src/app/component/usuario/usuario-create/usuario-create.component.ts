import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
import { UsuarioService } from '../usuario.service';
import { TipousuarioService } from '../../tipousuario/tipousuario.service';
import { Router } from '../../../../../node_modules/@angular/router';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  tipos: any = null;
  usuarioGroup: FormGroup;
  
  constructor(protected usuarioService: UsuarioService,
              protected tipoService: TipousuarioService,
              protected fb: FormBuilder,
              protected router: Router,
              protected toartr: ToastrService) {
    this.tipoService.listaCargos().subscribe(res => this.tipos = res);
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.usuarioGroup = this.fb.group({
      'idtipo' : new FormControl(0, [Validators.required]),
      'nombre' : new FormControl('', [Validators.required]),
      'correo' : new FormControl('', [Validators.required, Validators.pattern(/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/)]),
      'password' : new FormControl('', [Validators.required]),
      'password_confirmation' : new FormControl('', [Validators.required])
    });
  }

  store() {
      const clave1 = this.usuarioGroup.value.password;
      const clave2 = this.usuarioGroup.value.password_confirmation;
    if (clave1 === clave2){
        this.usuarioService.store(this.usuarioGroup.value)
            .subscribe((res: any) => {
                if (res.error) {
                    console.log(res.error);
                } else {
                    this.router.navigate(['acceso/component/usuarios']);
                    this.toartr.success("Usuario Guardado", "Ok");
                }
            },error =>{
                this.toartr.error("Usuaurio Registrado", "Error Usuario");
            });
    } else{
        this.toartr.info("Contraseñas Incorrectas","Verificar");
    }

  }

}
