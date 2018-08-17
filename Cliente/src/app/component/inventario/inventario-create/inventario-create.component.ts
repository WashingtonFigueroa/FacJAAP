import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
import { InventarioService } from '../inventario.service';
import { MaterialService } from '../../material/material.service';
import { Router } from '../../../../../node_modules/@angular/router';

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
              protected router: Router) {
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
    this.inventarioService.store(this.inventarioGroup.value)
        .subscribe((res: any) => {
            if (res.error) {
                    console.log(res.error);
            } else {
                this.inventarioGroup.patchValue({
                    descripcion: '',
                    cantidad: '',
                    responsable: '',
                    fecha: '',
                    estado:''
                });
                this.router.navigate(['acceso/component/inventarios']);
            }
        });
  }

}
