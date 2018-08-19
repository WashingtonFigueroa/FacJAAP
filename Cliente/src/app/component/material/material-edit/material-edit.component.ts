import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
import { MaterialService } from '../material.service';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-material-edit',
  templateUrl: './material-edit.component.html',
  styleUrls: ['./material-edit.component.css']
})
export class MaterialEditComponent implements OnInit {
  idmaterial: number = null;
  material: any = null;
  materialGroup: FormGroup;

  constructor(protected materialService: MaterialService,
              protected fb: FormBuilder,
              protected route: ActivatedRoute,
              protected router: Router,
              protected toastr: ToastrService) {

      this.route.params.subscribe(param => {
          this.idmaterial = param.id;
          this.materialService.show(param.id)
              .subscribe(res => {
                  this.material = res;
                  this.createForm(res);
              });
      });
  }

  ngOnInit() {
  }

  createForm(material) {
      this.materialGroup = this.fb.group({
          'nombre' : new FormControl(material.nombre, Validators.required),
          'descripcion' : new FormControl(material.descripcion)
      });
  }

  update() {
      this.materialService.update(this.materialGroup.value, this.idmaterial)
          .subscribe(res => {
              this.router.navigate(['acceso/component/materiales']);
              this.toastr.success("Material Actulizado", "Ok");
          });
  }

}
