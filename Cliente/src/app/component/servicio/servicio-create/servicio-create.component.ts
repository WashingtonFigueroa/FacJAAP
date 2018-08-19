import { Component, OnInit, ViewChild } from '@angular/core';
import {CreateNewAutocompleteGroup, NgAutocompleteComponent, SelectedAutocompleteItem} from "ng-auto-complete";

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ServicioService } from '../servicio.service';
import { ClienteService } from '../../cliente/cliente.service';
import { MedidorService } from '../../medidor/medidor.service';
import { Router } from '../../../../../node_modules/@angular/router';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-servicio-create',
  templateUrl: './servicio-create.component.html',
  styleUrls: ['./servicio-create.component.css']
})
export class ServicioCreateComponent implements OnInit {
  
  @ViewChild(NgAutocompleteComponent) public completer: NgAutocompleteComponent;
  clientesSearch: any = null;

  clientes: any = null;
  medidores: any = null;

  servicioGroup: FormGroup;

  constructor(protected servicioService: ServicioService,
              protected clienteService: ClienteService,
              protected medidorService: MedidorService,  
              protected router: Router,            
              protected fb: FormBuilder,
              protected toastr: ToastrService) {
      this.createForm();
      this.medidorService.medidoresActivos().subscribe(res => this.medidores = res);
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
              clientes,
              {titleKey: 'nombres', childrenKey: null}
          ),
      ];
  }

  Selected(item: SelectedAutocompleteItem) {
    const idcliente = item.item.original.idcliente;
    this.servicioGroup.patchValue({
       'idcliente' : idcliente
    });
  }

  ngOnInit() {
  }

  createForm() {
      this.servicioGroup = this.fb.group({
          'idcliente' : new FormControl(0, Validators.required),
          'idmedidor' : new FormControl('', [Validators.required]),
          'fecha' : new FormControl('', [Validators.required]),
          'observacion' : new FormControl(),
          'estado' : "Activo"
      });
  }

  store() {
    const Ingfecha = this.servicioGroup.value.fecha;
    var f = new Date();
    const Sisfecha = f.getFullYear() + "-" + (f.getMonth() +1) + "-" + f.getDate();
    if( (new Date(Ingfecha).getTime() <= new Date(Sisfecha).getTime())) {
        this.servicioService.store(this.servicioGroup.value)
            .subscribe(res => {
                this.servicioGroup.patchValue({
                    fecha: '',
                    observacion: '',
                    estado: ''
                });
                this.router.navigate(['acceso/component/servicios']);
                this.toastr.success("Servicio Guardado","Ok");
            });
    }else{
        this.toastr.error("La fecha ingresada es mayor a la fecha actual","Error Servicio");
    }
  }

}
