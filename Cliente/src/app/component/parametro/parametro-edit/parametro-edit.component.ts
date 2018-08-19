import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ParametroService } from '../parametro.service';
import { ActivatedRoute, Router } from '@angular/router';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-parametro-edit',
  templateUrl: './parametro-edit.component.html',
  styleUrls: ['./parametro-edit.component.css']
})

export class ParametroEditComponent implements OnInit {
  idparametro: number = null;
  parametro: any = null;
  parametroGroup: FormGroup;

  constructor(protected parametroService: ParametroService,
              protected fb: FormBuilder,
              protected route: ActivatedRoute,
              protected router: Router,
              protected toastr: ToastrService) {

      this.route.params.subscribe(param => {
          this.idparametro = param.id;
          this.parametroService.show(param.id)
              .subscribe(res => {
                  this.parametro = res;
                  this.createForm(res);
              });
      });
  }

  ngOnInit() {
  }

  createForm(parametro) {
      this.parametroGroup = this.fb.group({
          'descripcion' : new FormControl(parametro.descripcion, Validators.required),
          'valor' : new FormControl(parametro.valor, Validators.required),
          'detalle' : new FormControl(parametro.detalle),
          'estado' : new FormControl(parametro.estado, Validators.required)
      });
  }

  update() {
      this.parametroService.update(this.parametroGroup.value, this.idparametro)
          .subscribe(res => {
              this.router.navigate(['acceso/component/parametros']);
              this.toastr.success('Parametro Actualizado', 'Ok');
          });
  }
}
