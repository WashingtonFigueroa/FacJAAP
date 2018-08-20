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
      'correo' : new FormControl('', [Validators.required]),
      'password' : new FormControl('', [Validators.required]),
      'password_confirmation' : new FormControl('', [Validators.required])
    });
  }

  store() {
    this.usuarioService.store(this.usuarioGroup.value)
        .subscribe((res: any) => {
            if (res.error) {
                    console.log(res.error);
            } else {
                this.usuarioGroup.patchValue({
                    nombre: '',
                    correo: '',
                    password: '',
                    password_confirmation: ''
                });
                this.router.navigate(['acceso/component/usuarios']);
                this.toartr.success("Usuario Guardado", "Ok");
            }
        },error =>{
            this.toartr.error("Usuaurio Registrado", "Error Usuario");
            });
  }

}
