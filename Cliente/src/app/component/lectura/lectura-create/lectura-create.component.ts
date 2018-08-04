import { Component, OnInit, ViewChild } from '@angular/core';
import {CreateNewAutocompleteGroup, NgAutocompleteComponent, SelectedAutocompleteItem} from "ng-auto-complete";

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LecturaService } from '../lectura.service';
import { ServicioService } from '../../servicio/servicio.service';
import { ClienteService } from "../../cliente/cliente.service";
import { MedidorService } from "../../medidor/medidor.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-lectura-create',
  templateUrl: './lectura-create.component.html',
  styleUrls: ['./lectura-create.component.css']
})

export class LecturaCreateComponent implements OnInit {
  
  @ViewChild(NgAutocompleteComponent) public completer: NgAutocompleteComponent;
  clientesSearch: any = null;

  clientes: any = null;
  successStatus = false;

  medidores: any = null;
  servicios: any = null;
  lecturaGroup: FormGroup;

  constructor(protected lecturaService: LecturaService,
    protected servicioService: ServicioService,
    protected clienteService: ClienteService,
    protected medidorService: MedidorService,
    protected router: Router,
    protected fb: FormBuilder) {
    this.servicioService.listaServicios().subscribe(res => this.servicios = res);
    this.createForm();

    this.clienteService.listaClientes().subscribe(res => {
      this.clientes = res;
      this.load(res);
    });
  }

  load(clientes) {
    this.clientesSearch = [
      CreateNewAutocompleteGroup(
        'Buscar cliente',
        'completer',
        clientes, {
          titleKey: 'nombres',
          childrenKey: null
        }
      ),
    ];
  }

  Selected(item: SelectedAutocompleteItem) {
    this.lecturaGroup.patchValue({
      'idcliente': item.item.original.idcliente
    });
    this.medidorService.listaMedidoresCliente(this.lecturaGroup.value.idcliente)
      .subscribe(res => {
        this.medidores = res;
      });
  }

  ngOnInit() {}

  createForm() {
    this.lecturaGroup = this.fb.group({
      'idcliente': new FormControl(0, [Validators.required]),
      'idmedidor': new FormControl(0, [Validators.required]),
      'observacion': new FormControl('', [Validators.required]), 
      'fecha': new FormControl(null, [Validators.required]),
      'anterior': new FormControl(null, [Validators.required]),
      'actual': new FormControl('', [Validators.required]),
      'estado': new FormControl('Deber', [Validators.required])
    });
  }

  store() {
    if (this.lecturaGroup.value.actual < this.lecturaGroup.value.anterior && this.lecturaGroup.value.fecha == null) {
        this.lecturaGroup.patchValue({
            actual: 0
        });
        this.successStatus = true;
    } else {
        this.lecturaService.store(this.lecturaGroup.value)
            .subscribe(res => {
                this.lecturaGroup.patchValue({
                    observacion: '',
                    fecha: null,
                    anterior: '',
                    actual: '',
                });                
                this.router.navigate(['/component/lecturas/listar']);
            });
    }
  }
  searchLecturaAnterior() {
    this.lecturaService.searchLecturaAnterior(this.lecturaGroup.value.idmedidor)
        .subscribe((res: any) => {
          if(res.anterior) {
            this.lecturaGroup.patchValue({
                anterior : res.actual
            });
          }
        });

  }
  listaMedidoresCliente() {
    console.log('lectura');
    const idcliente = this.lecturaGroup.value.idcliente;
    this.medidorService.listaMedidoresCliente(idcliente)
      .subscribe(res => this.medidores = res);
  }

}