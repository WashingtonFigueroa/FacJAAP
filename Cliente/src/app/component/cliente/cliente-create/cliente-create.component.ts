import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { Router } from '../../../../../node_modules/@angular/router';
import {ToastrService} from "ngx-toastr";
import {NgxMaskModule} from 'ngx-mask'
import {log} from "util";

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})

export class ClienteCreateComponent implements OnInit
{
    clienteGroup: FormGroup;
    successStatus = false;
    consulta_cedula;
    txt_ruc;

    constructor(protected fb: FormBuilder,
                protected clienteService: ClienteService,
                protected router: Router,
                protected toastr: ToastrService)
    {
        this.createForm();
    }

    ngOnInit()
    {}

    createForm()
    {
        this.clienteGroup = this.fb.group(
            {
                'cedula': new FormControl('', [Validators.required, Validators.pattern(/^\d{13}$/)]),
                'nombres': new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z ]{10,100}$/)]),
                'direccion': new FormControl('', [Validators.required]),
                'email': new FormControl('', [Validators.required]),
                'telefono': new FormControl('', [Validators.required,
                  Validators.pattern(/^\d{10}$/)]),
                'referencia': new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
                'observacion': new FormControl('', [Validators.required])
            });
    }

    store() {
        let x = 0;
        if (!this.clienteGroup.value.cedula || this.clienteGroup.value.cedula.length != 10) {
            x++;
            this.toastr.error('Ingrese Cédula', 'Error de cliente');
        }
        if (!this.clienteGroup.value.nombres) {
            x++;
            this.toastr.error('Ingrese Nombres', 'Error de cliente');
        }
        if (!this.clienteGroup.value.direccion) {
            x++;
            this.toastr.error('Ingrese Dirección', 'Error de cliente');
        }
    console.log(this.clienteGroup.value.telefono.length);
        if (this.clienteGroup.value.telefono.length != 0 || this.clienteGroup.value.telefono.length != 10)
        {
            x++;
            this.toastr.error('Ingrese Telefono', 'Error de cliente');
        }
        if (x === 0)
        {
            this.clienteService.store(this.clienteGroup.value)
                .subscribe((cliente: any) =>
                {
                    this.router.navigate(['acceso/component/clientes']);
                }, (error) =>
                {
                    this.toastr.error('Cliente ya registrado', 'Error de cliente');
                    this.clienteGroup.reset();
                });
        }

    }

    consultacliente()
    {
        this.clienteService.consultaCedula(this.clienteGroup.value.cedula)
            .subscribe((cliente: any) =>
            {
                if (cliente.datosPersona.valid === true)
                {
                    this.clienteGroup.patchValue(
                        {
                            nombres: cliente.datosPersona.name
                        });
                }
                else
                {
                    this.toastr.error('Ingrese Nuevamente', 'Error Cédula');
                    this.clienteGroup.reset();
                }
            });
    }

}
