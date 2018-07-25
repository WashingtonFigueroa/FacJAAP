import {
  Component, OnInit
}
from '@angular/core';
import {
  FormGroup, FormBuilder, FormControl, Validators
}
from '@angular/forms';
import {
  ActivatedRoute, Router
}
from '@angular/router';
import {
  MaterialService
}
from '../material.service';
import {
  ProveedorService
}
from '../../proveedor/proveedor.service';
@
Component({
  selector: 'app-material-edit',
  templateUrl: './material-edit.component.html',
  styleUrls: ['./material-edit.component.css']
})
export class MaterialEditComponent implements OnInit {
  idmaterial: number = null;
  material: any = null;
  proveedores: any = null;
  materialGroup: FormGroup;
  constructor(protected materialService: MaterialService,
    protected proveedorService: ProveedorService,
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    protected router: Router) {
    this.proveedorService.index()
      .subscribe(res => this.proveedores = res);
    this.route.params.subscribe(param => {
      this.idmaterial = param.id;
      this.materialService.show(param.id)
        .subscribe(res => {
          this.material = res;
          this.createForm(res);
        });
    });
  }
  ngOnInit() {}
  createForm(proveedor) {
    this.materialGroup = this.fb.group({
      'idproveedor': new FormControl(proveedor.ruc, [Validators.required]),
      'nombre': new FormControl(proveedor.nombre, [Validators.required]),
      'descripcion': new FormControl(proveedor.descripcion, [Validators.required])
    });
  }
  update() {
    this.materialService.update(this.materialGroup.value, this.idmaterial)
      .subscribe(res => {
        this.router.navigate(['component/materiales']);
        console.log(res);
      });
  }
}