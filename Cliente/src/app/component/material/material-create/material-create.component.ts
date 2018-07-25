import { Component, OnInit } from '@angular/core';
import {MaterialService} from "../material.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProveedorService} from "../../proveedor/proveedor.service";

@Component({
  selector: 'app-material-create',
  templateUrl: './material-create.component.html',
  styleUrls: ['./material-create.component.css']
})
export class MaterialCreateComponent implements OnInit {

  proveedores: any = null;
  materialGroup: FormGroup;
  constructor(protected materialService: MaterialService,
              protected proveedorService: ProveedorService,
              protected fb: FormBuilder) {
    this.proveedorService.index()
        .subscribe(res => this.proveedores = res);
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.materialGroup = this.fb.group({
      'idproveedor' : new FormControl(0, [Validators.required]),
      'nombre' : new FormControl('', [Validators.required]),
      'descripcion' : new FormControl('', [Validators.required])
    });
  }
  store() {
    this.materialService.store(this.materialGroup.value)
        .subscribe(res => {
            this.materialGroup.patchValue({
                nombre: '',
                descripcion: ''
            });
            console.log(res);
        });
  }

}
