import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { Router } from '../../../../../node_modules/@angular/router';
import {ToastrService} from "ngx-toastr";
import {log} from "util";

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {
  clienteGroup: FormGroup;
  successStatus = false;
  consulta_cedula;
  txt_ruc;

  constructor(protected fb: FormBuilder,
              protected clienteService: ClienteService,
              protected router: Router,
              protected toastr: ToastrService) {
              this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
      this.clienteGroup = this.fb.group({
          'cedula' : new FormControl('', [Validators.required, Validators.pattern(/^\d{13}$/)]),
          'nombres' : new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z ]{10,100}$/)]),
          'direccion' : new FormControl('', [Validators.required]),
          'email' : new FormControl('', [Validators.required]),
          'telefono' : new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
          'referencia' : new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
          'observacion' : new FormControl('', [Validators.required])
      });
  }

  store() {
      this.clienteService.store(this.clienteGroup.value)
          .subscribe((cliente: any)=> {
              console.log('cliente guardado');
              this.router.navigate(['acceso/component/clientes']);
              this.successStatus = true;
          });
  }

    consultacliente() {
        this.clienteService.consultaCedula(this.clienteGroup.value.cedula)
            .subscribe((cliente: any) => {
                if (cliente.datosPersona.valid === true) {
                    this.clienteGroup.patchValue({
                        nombres: cliente.datosPersona.name
                    });
                } else {
                    this.toastr.error('El cliente no existe', 'Error de cedula');
                }
            });
    }

}
 

