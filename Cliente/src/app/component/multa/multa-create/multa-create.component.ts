import { Component, OnInit, ViewChild } from '@angular/core';
import {CreateNewAutocompleteGroup, NgAutocompleteComponent, SelectedAutocompleteItem} from "ng-auto-complete";

import { FormGroup, FormBuilder, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
import { MultaService } from '../multa.service';
import { ClienteService } from '../../cliente/cliente.service';
import { MedidorService } from '../../medidor/medidor.service';

@Component({
  selector: 'app-multa-create',
  templateUrl: './multa-create.component.html',
  styleUrls: ['./multa-create.component.css']
})
export class MultaCreateComponent implements OnInit {

  @ViewChild(NgAutocompleteComponent) public completer: NgAutocompleteComponent;
  clientesSearch: any = null;

  clientes: any = null;
  medidores: any = null;
  multaGroup: FormGroup;

  constructor(protected multaService: MultaService,
              protected clienteService: ClienteService,
              protected medidorService: MedidorService,
              protected fb: FormBuilder) {
                this.createForm();
 
    this.clienteService.listaClientes().subscribe(res => {
      this.clientes = res;
      this.load(res);
    });   
  }

  Selected(item: SelectedAutocompleteItem) {
    this.medidorService.listaMedidoresCliente(item.item.original.idcliente)
        .subscribe(res => {
            this.medidores = res;
        });
}
load(clientes) {
  this.clientesSearch = [
        CreateNewAutocompleteGroup(
            'Buscar cliente',
            'completer',
            clientes,
            {titleKey: 'nombres', childrenKey: null}
        ),
    ];
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
      'estado' : "Deber"
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



  // listaMedidoresCliente() {
  //     console.log('multas');
  //     const idcliente = this.multaGroup.value.idcliente;
  //     this.medidorService.listaMedidoresCliente(idcliente)
  //         .subscribe(res => this.medidores = res);
  // }

}
