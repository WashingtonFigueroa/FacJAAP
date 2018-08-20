import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
import { UsuarioService } from '../usuario.service';
import { TipousuarioService } from '../../tipousuario/tipousuario.service';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {
  iduser: number = null;
  usuario: any = null;
  tipos: any = null;
  usuarioGroup: FormGroup;

  constructor(protected usuarioService: UsuarioService,
    protected tipoService: TipousuarioService,
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    protected router: Router,
              protected toastr: ToastrService) {
    this.tipoService.listaCargos().subscribe(res => this.tipos = res);
   
    this.route.params.subscribe(param => {
      this.iduser = param.id;
      this.usuarioService.show(param.id).subscribe(res => {
          this.usuario = res;
          this.createForm(res);
        });
    });
  }

  ngOnInit() {}
  
  createForm(usuario) {
    this.usuarioGroup = this.fb.group({
      'idtipo': new FormControl(usuario.idtipo, [Validators.required]),
      'nombre': new FormControl(usuario.nombre, [Validators.required]),
      'correo' : new FormControl(usuario.correo, [Validators.required, Validators.pattern(/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/)]),
      'password': new FormControl(usuario.password, [Validators.required]),
      'password2': new FormControl(usuario.password, [Validators.required])
    });
  }

  update() {
      const clave1 = this.usuarioGroup.value.password;
      const clave2 = this.usuarioGroup.value.password_confirmation;
      if (clave1 === clave2){
        this.usuarioService.update(this.usuarioGroup.value, this.iduser)
          .subscribe(res => {
            this.router.navigate(['acceso/component/usuarios']);
            this.toastr.success("Usuario Actualizado", "Ok");
          });
      } else{
          this.toastr.info("Contraseñas Incorrectas","Verificar");
          this.usuarioGroup.value.password ='';

      }
  }
}