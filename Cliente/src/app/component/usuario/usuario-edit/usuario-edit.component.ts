import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
import { UsuarioService } from '../usuario.service';
import { TipousuarioService } from '../../tipousuario/tipousuario.service';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';

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
    protected router: Router) {
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
      'correo': new FormControl(usuario.correo, [Validators.required]),
      'password': new FormControl(usuario.password, [Validators.required]),
      'password2': new FormControl(usuario.password, [Validators.required])
    });
  }

  update() {
    this.usuarioService.update(this.usuarioGroup.value, this.iduser)
      .subscribe(res => {
        this.router.navigate(['component/usuarios']);
        console.log('usuario modificado');
      });
  }
}