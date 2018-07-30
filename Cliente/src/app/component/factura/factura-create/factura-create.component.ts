import {Component, OnInit, ViewChild} from '@angular/core';
import {CreateNewAutocompleteGroup, NgAutocompleteComponent, SelectedAutocompleteItem} from "ng-auto-complete";
import {ClienteService} from "../../cliente/cliente.service";
import {MedidorService} from "../../medidor/medidor.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LecturaService} from "../../lectura/lectura.service";

@Component({
  selector: 'app-factura-create',
  templateUrl: './factura-create.component.html',
  styleUrls: ['./factura-create.component.css']
})
export class FacturaCreateComponent implements OnInit {

  @ViewChild(NgAutocompleteComponent) public completer: NgAutocompleteComponent;
  clientesSearch: any = null;

  clientes: any = null;
  direccion : any = null;
  medidores: any = null;
  lecturas: any = null;
  facturaGroup: FormGroup;
  factura: any = { 
      'tarifa' : 0,
      'multa' : 0,
      'total' : 0
  };
  constructor(protected clienteService: ClienteService,
              protected medidorService: MedidorService,
              protected lecturaService: LecturaService,
              protected fb: FormBuilder) {
    this.createForm();
    
    this.clienteService.listaClientes().subscribe(res => {
            this.clientes = res;
            this.load(res);
        });
  }
  createForm() {
      this.facturaGroup = this.fb.group({
          'idcliente' : new FormControl(0, Validators.required),
          'idmedidor' : new FormControl(0, Validators.required)
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

  Selected(item: SelectedAutocompleteItem) {
      this.medidorService.listaMedidoresCliente(item.item.original.idcliente)
          .subscribe(res => {
              this.medidores = res;
          });

    
          this.clienteService.listaClientes().subscribe((res: any) => {
             this.direccion = res.direccion;
        });

  }

  listaLecturas(){
    this.medidorService.listaLecturas(this.facturaGroup.value.idmedidor)
        .subscribe(res => {
            this.lecturas = res;
        });
  }

  pagar(idlectura, index) {
      return this.lecturaService.pagar(idlectura)
                 .subscribe((res: any)=> {
                     this.factura.tarifa = res.tarifa;
                     this.factura.multa = res.multa;
                     this.factura.total = res.total;
                     this.lecturas.splice(index, 1, res.lectura);
                 });
  }

  verFactura(idlectura) {
      return this.lecturaService.verFactura(idlectura)
                 .subscribe((res: any) => {
                     this.factura.tarifa = res.tarifa;
                     this.factura.multa = res.multa;
                     this.factura.total = res.total;
                 });
  }
}
