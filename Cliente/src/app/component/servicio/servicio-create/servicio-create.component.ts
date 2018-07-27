import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ServicioService } from '../servicio.service';
import { ClienteService } from '../../cliente/cliente.service';
import { MedidorService } from '../../medidor/medidor.service';

@Component({
  selector: 'app-servicio-create',
  templateUrl: './servicio-create.component.html',
  styleUrls: ['./servicio-create.component.css']
})
export class ServicioCreateComponent implements OnInit {
  clientes: any = null;
  medidores: any = null;

  servicioGroup: FormGroup;

  constructor(protected servicioService: ServicioService,
              protected clienteService: ClienteService,
              protected medidorService: MedidorService,              
              protected fb: FormBuilder) {
    this.clienteService.index().subscribe(res => this.clientes = res);
    this.medidorService.index().subscribe(res => this.medidores = res);
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.servicioGroup = this.fb.group({
      'idcliente' : new FormControl(0, [Validators.required]),
      'idmedidor' : new FormControl('', [Validators.required]),
      'fecha' : new FormControl('', [Validators.required]),
      'observacion' : new FormControl('', [Validators.required]),
      'estado' : new FormControl('', [Validators.required]),
    });
  }

  store() {
    this.servicioService.store(this.servicioGroup.value)
        .subscribe(res => {
            this.servicioGroup.patchValue({
                fecha: '',
                observacion: '',
                estado: ''
            });
        });
  }

}
