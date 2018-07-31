import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LecturaService } from '../lectura.service';
import { ServicioService } from '../../servicio/servicio.service';
import {ClienteService} from "../../cliente/cliente.service";
import {MedidorService} from "../../medidor/medidor.service";

@Component({
  selector: 'app-lectura-create',
  templateUrl: './lectura-create.component.html',
  styleUrls: ['./lectura-create.component.css']
})
export class LecturaCreateComponent implements OnInit {

  clientes: any = null;
  medidores: any = null;
  servicios: any = null;
  lecturaGroup: FormGroup;

  constructor(protected lecturaService: LecturaService,
              protected servicioService: ServicioService,
              protected clienteService: ClienteService,
              protected medidorService: MedidorService,
              protected fb: FormBuilder) {
    this.clienteService.listaClientes().subscribe(res => this.clientes = res);
    this.servicioService.listaServicios().subscribe(res => this.servicios = res);

    this.createForm();
  }

  ngOnInit() {  
  }

  createForm() {
    this.lecturaGroup = this.fb.group({
      'idcliente' : new FormControl(0, [Validators.required]),
      'idmedidor' : new FormControl(0, [Validators.required]),
      'observacion' : new FormControl('', [Validators.required]),
      'fecha' : new FormControl(null, [Validators.required]),
      'actual' : new FormControl('', [Validators.required]),
      'estado' : new FormControl('Deber', [Validators.required])
    });
  }

  store() {
    this.lecturaService.store(this.lecturaGroup.value)
        .subscribe(res => {
            this.lecturaGroup.patchValue({
                observacion: '',
                fecha: null,
                actual: '',
            });
           
        });
  }
  listaMedidoresCliente() {
      console.log('lectura');
      const idcliente = this.lecturaGroup.value.idcliente;
      this.medidorService.listaMedidoresCliente(idcliente)
          .subscribe(res => this.medidores = res);
  }

}
