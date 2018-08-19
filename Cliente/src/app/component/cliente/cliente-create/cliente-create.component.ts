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
                'cedula': new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
                'nombres': new FormControl('', [Validators.required]),
                'direccion': new FormControl('', [Validators.required]),
                'email': new FormControl('', [Validators.pattern(/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/)]),
                'telefono': new FormControl('', [Validators.pattern(/^\d{10}$/)]),
                'referencia': new FormControl('', [Validators.pattern(/^\d{10}$/)]),
                'observacion': new FormControl()
            });
    }

    store() {
        this.clienteService.store(this.clienteGroup.value)
            .subscribe((cliente: any) =>
            {
                this.router.navigate(['acceso/component/clientes']);
                this.toastr.success('Cliente Guardado', 'Ok');
            }, (error) =>
            {
                this.toastr.error('Cliente ya registrado', 'Error de cliente');
                this.clienteGroup.reset();
            });
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
                            cedula: cliente.datosPersona.identity,
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
