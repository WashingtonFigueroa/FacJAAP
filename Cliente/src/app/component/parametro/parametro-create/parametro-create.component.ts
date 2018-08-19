import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ParametroService } from '../parametro.service';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-parametro-create',
  templateUrl: './parametro-create.component.html',
  styleUrls: ['./parametro-create.component.css']
})
export class ParametroCreateComponent implements OnInit {
  parametroGroup: FormGroup;
  constructor(protected fb: FormBuilder,
              protected parametroService: ParametroService,
              protected toastr: ToastrService) {
      this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
      this.parametroGroup = this.fb.group({
          'descripcion' : new FormControl('',[Validators.required]),
          'valor' : new FormControl('',[Validators.required]),
          'detalle' : new FormControl(),
          'estado' : "Activo"
      });
  }

  store() {
      this.parametroService.store(this.parametroGroup.value)
          .subscribe(res => {
              this.parametroGroup.reset();
              this.parametroGroup.patchValue({'estado': 'Activo'});
              this.toastr.success('Parametro Guardado', 'Ok');
          }, (error) => {
              this.toastr.error('Descripción Repetida', 'Error de Parametro');
              this.parametroGroup.reset();
          });
  }
}
