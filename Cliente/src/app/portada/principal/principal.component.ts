import {Component, OnInit, ViewChild} from '@angular/core';
import {CreateNewAutocompleteGroup, NgAutocompleteComponent, SelectedAutocompleteItem} from "ng-auto-complete";

import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ClienteService} from "../../component/cliente/cliente.service";
import {MedidorService} from "../../component/medidor/medidor.service";
import {LecturaService} from "../../component/lectura/lectura.service";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
    @ViewChild(NgAutocompleteComponent) public completer: NgAutocompleteComponent;
    nombres: any = null;

    clientes: any = null;
    direccion : any = null;
    medidores: any = null;
    lecturas: any = null;
    facturaGroup: FormGroup;
    factura: any = {
        'idfactura' : 0,
        'tarifa' : 0,
        'multa' : 0,
        'total' : 0
    };
    lectura: any = null;
    datos: any = {
        mes_facturado: '',
        cuenta: '',
        cliente: '',
        cedula: '',
        direccion: '',
        codigo_medidor: ''
    };

    constructor(protected clienteService: ClienteService,
                protected medidorService: MedidorService,
                protected lecturaService: LecturaService,
                protected toastr: ToastrService,
                protected fb: FormBuilder) {
        this.createForm();
    }
    createForm() {
        this.facturaGroup = this.fb.group({
            'nombres' : new FormControl('', Validators.required),
            'idcliente' : new FormControl(0, Validators.required),
            'idmedidor' : new FormControl(0, Validators.required)
        });
    }
    ngOnInit() {
    }

    listaLecturas(){
        this.medidorService.show(this.facturaGroup.value.idmedidor)
            .subscribe((medidor: any) => {
                this.datos.codigo_medidor = medidor.codigo;
            });

        this.medidorService.servicioMedidor(this.facturaGroup.value.idmedidor)
            .subscribe((servicio: any) => {
                this.datos.cuenta = servicio.idservicio
            });

        this.medidorService.listaLecturas(this.facturaGroup.value.idmedidor)
            .subscribe(res => {
                this.lecturas = res;
            });
    }

    searchCliente() {
      this.medidorService.listaMedidoresClienteNombres(this.facturaGroup.value.nombres)
        .subscribe(res => {
          this.medidores = res;
            this.toastr.info('Seleccione Medidor', 'ok');
        });
    }

}
