import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateNewAutocompleteGroup, NgAutocompleteComponent, SelectedAutocompleteItem } from "ng-auto-complete";

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
  successStatus = false;

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
    this.multaGroup.patchValue({
      'idcliente': item.item.original.idcliente
    });
    this.medidorService.listaMedidoresCliente(this.multaGroup.value.idcliente)
      .subscribe(res => {
        this.medidores = res;
      });
  }

  ngOnInit() {}

  createForm() {
    this.multaGroup = this.fb.group({
      'idcliente': new FormControl(0, [Validators.required]),
      'idmedidor': new FormControl(0, [Validators.required]),
      'descripcion': new FormControl('', [Validators.required]),
      'valor': new FormControl(null, [Validators.required]),
      'fecha': new FormControl('', [Validators.required]),
      'estado': "Deber"
    });
  }
  store() {
    this.multaGroup.patchValue({
      valor: parseFloat(this.multaGroup.value.valor)
    });
    this.multaService.store(this.multaGroup.value)
      .subscribe(res => {
        this.multaGroup.patchValue({
          descripcion: '',
          valor: '',
          fecha: '',
          estado: ''
        });
        this.successStatus = true;
      });
  }
}