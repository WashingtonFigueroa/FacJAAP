import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MedidorService } from '../medidor.service';
import { ActivatedRoute, Router } from '@angular/router';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-medidor-edit',
  templateUrl: './medidor-edit.component.html',
  styleUrls: ['./medidor-edit.component.css']
})
export class MedidorEditComponent implements OnInit {
  
  idmedidor: number = null;
  medidor: any = null;
  medidorGroup: FormGroup;

  constructor(protected medidorService: MedidorService,
              protected fb: FormBuilder,
              protected route: ActivatedRoute,
              protected router: Router,
              protected toastr: ToastrService
) {

      this.route.params.subscribe(param => {
          this.idmedidor = param.id;
          this.medidorService.show(param.id)
              .subscribe(res => {
                  this.medidor = res;
                  this.createForm(res);
              });
      });
  }

  ngOnInit() {
  }

  createForm(medidor) {
      this.medidorGroup = this.fb.group({
          'codigo' : new FormControl(medidor.codigo, Validators.required),
          'observacion' : new FormControl(medidor.observacion, Validators.required),
          'estado' : new FormControl(medidor.estado, Validators.required)
      });
  }

  update() {
      this.medidorService.update(this.medidorGroup.value, this.idmedidor)
          .subscribe(res => {
              this.router.navigate(['acceso/component/medidores']);
              this.toastr.success('Medidor Actualizado', 'Ok');

          }, (error) => {
              this.toastr.error('Código Repetido ', 'Error de Medidor');
          });
  }
}
