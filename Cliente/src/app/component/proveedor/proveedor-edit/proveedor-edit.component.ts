import { Component, OnInit } from '@angular/core';
import {ProveedorService} from "../proveedor.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-proveedor-edit',
  templateUrl: './proveedor-edit.component.html',
  styleUrls: ['./proveedor-edit.component.css']
})
export class ProveedorEditComponent implements OnInit {
    idproveedor: number = null;
    proveedor: any = null;
    proveedorGroup: FormGroup;
    constructor(protected proveedorService: ProveedorService,
                protected fb: FormBuilder,
                protected route: ActivatedRoute,
                protected router: Router) {

        this.route.params.subscribe(param => {
            this.idproveedor = param.id;
            this.proveedorService.show(param.id)
                .subscribe(res => {
                    this.proveedor = res;
                    this.createForm(res);
                });
        });
    }

    ngOnInit() {
    }

    createForm(proveedor) {
        this.proveedorGroup = this.fb.group({
            'ruc' : new FormControl(proveedor.ruc, [Validators.required, Validators.pattern(/^\d{13}$/)]),
            'nombre' : new FormControl(proveedor.nombre, Validators.required),
            'direccion' : new FormControl(proveedor.direccion, Validators.required),
            'telefono' : new FormControl(proveedor.telefono, Validators.required)
        });
    }


    update() {
        this.proveedorService.update(this.proveedorGroup.value, this.idproveedor)
            .subscribe(res => {
                this.router.navigate(['component/proveedores']);
                console.log(res);
            });
    }
}
