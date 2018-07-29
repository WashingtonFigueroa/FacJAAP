import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
import { MultaService } from '../multa.service';
import { ServicioService } from '../../servicio/servicio.service';
import { ClienteService } from '../../cliente/cliente.service';
import { MedidorService } from '../../medidor/medidor.service';

@Component({
  selector: 'app-multa-create',
  templateUrl: './multa-create.component.html',
  styleUrls: ['./multa-create.component.css']
})
export class MultaCreateComponent implements OnInit {

  clientes: any = null;
  medidores: any = null;
  servicios: any = null;
  multaGroup: FormGroup;

  constructor(protected multaService: MultaService,
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
    this.multaGroup = this.fb.group({
      'idcliente' : new FormControl(0, [Validators.required]),
      'idmedidor' : new FormControl(0, [Validators.required]),
      'descripcion' : new FormControl('', [Validators.required]),
      'valor' : new FormControl('', [Validators.required]),
      'fecha' : new FormControl('', [Validators.required]),
      'estado' : new FormControl('', [Validators.required])
    });
  }

  store() {
    this.multaService.store(this.multaGroup.value)
        .subscribe(res => {
            this.multaGroup.patchValue({
                descripcion: '',
                valor: '',
                fecha: '',
                estado: ''
            });
           
        });
  }
  listaMedidoresCliente() {
      console.log('multas');
      const idcliente = this.multaGroup.value.idcliente;
      this.medidorService.listaMedidoresCliente(idcliente)
          .subscribe(res => this.medidores = res);
  }

}
