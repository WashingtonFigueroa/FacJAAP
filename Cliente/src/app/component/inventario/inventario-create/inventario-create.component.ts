import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
import { InventarioService } from '../inventario.service';
import { MaterialService } from '../../material/material.service';
import { Router } from '../../../../../node_modules/@angular/router';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-inventario-create',
  templateUrl: './inventario-create.component.html',
  styleUrls: ['./inventario-create.component.css']
})
export class InventarioCreateComponent implements OnInit {

  materiales: any = null;
  inventarioGroup: FormGroup;
  
  constructor(protected inventarioService: InventarioService,
              protected materialService: MaterialService,
              protected fb: FormBuilder,
              protected router: Router,
              protected toastr: ToastrService) {
    this.materialService.listaMateriales().subscribe(res => this.materiales = res);
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.inventarioGroup = this.fb.group({
      'idmaterial' : new FormControl(0, [Validators.required]),
      'descripcion' : new FormControl('', [Validators.required]),
      'cantidad' : new FormControl('', [Validators.required]),
      'responsable' : new FormControl('', [Validators.required]),
      'fecha' : new FormControl('', [Validators.required]),
      'estado' : new FormControl('', [Validators.required])
    });
  }

    store() {
        const Ingfecha = this.inventarioGroup.value.fecha;
        var f = new Date();
        const Sisfecha = f.getFullYear() + "-" + (f.getMonth() +1) + "-" + f.getDate();
        if( (new Date(Ingfecha).getTime() <= new Date(Sisfecha).getTime())) {
            this.inventarioService.store(this.inventarioGroup.value)
                .subscribe(res => {
                    this.router.navigate(['acceso/component/materiales']);
                    this.toastr.success("Registro Guardado", "Ok");
                }, (error) => {
                    this.toastr.error(' registrado', 'Error Materiales');
                });
        } else{
                const message = 'La fecha ingresada es mayor a la fecha actual';
                this.toastr.error(message, 'Error de ingreso de datos', {
                    timeOut: 5000
                });
            }
    }

}
