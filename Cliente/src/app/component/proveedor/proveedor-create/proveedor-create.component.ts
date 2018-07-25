import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProveedorService} from "../proveedor.service";

@Component({
  selector: 'app-proveedor-create',
  templateUrl: './proveedor-create.component.html',
  styleUrls: ['./proveedor-create.component.css']
})
export class ProveedorCreateComponent implements OnInit {
    proveedorGroup: FormGroup;
    constructor(protected fb: FormBuilder,
                protected proveedorService: ProveedorService) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.proveedorGroup = this.fb.group({
            'ruc' : new FormControl('',
                [Validators.required, Validators.pattern(/^\d{13}$/)]),
            'nombre' : new FormControl('',
                [Validators.required, Validators.pattern(/^[A-Za-z ]{10,100}$/)]),
            'direccion' : new FormControl('',
                [Validators.required, Validators.pattern(/^[A-Za-z ]{10,150}$/)]),
            'telefono' : new FormControl('',
                [Validators.required, Validators.pattern(/^\d{10}$/)])
        });
    }

    store() {
        this.proveedorService.store(this.proveedorGroup.value)
            .subscribe(res => {
                console.log('proveedor guardado');
                this.proveedorGroup.reset();
            });
    }
}
