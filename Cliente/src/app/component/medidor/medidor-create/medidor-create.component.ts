import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MedidorService } from '../medidor.service';
import { Router } from '../../../../../node_modules/@angular/router';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-medidor-create',
  templateUrl: './medidor-create.component.html',
  styleUrls: ['./medidor-create.component.css']
})
export class MedidorCreateComponent implements OnInit {
  medidorGroup: FormGroup;
  constructor(protected fb: FormBuilder,
              protected medidorService: MedidorService,
              protected router: Router,
              protected toastr: ToastrService) {
              this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
      this.medidorGroup = this.fb.group({
          'codigo' : new FormControl('',[Validators.required]),
          'observacion' : new FormControl('',[Validators.required]),
          'estado' : new FormControl('',[Validators.required])
      });
  }

  store() {
      this.medidorService.store(this.medidorGroup.value)
          .subscribe((res: any)=> {
              if (res.error) {
                  this.toastr.error('Código Repetido', 'Error de medidor');
              } else {
                  this.router.navigate(['acceso/component/medidores']);
                  this.toastr.success('Medidor Guardado', 'Ok');
              }
          });
  }
}
