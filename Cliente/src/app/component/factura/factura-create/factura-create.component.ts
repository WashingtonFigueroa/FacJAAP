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
  ver = false;
  clientesSearch: any = null;

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
      this.direccion = item.item.original.direccion;

      this.datos.cliente = item.item.original.nombres;
      this.datos.direccion = item.item.original.direccion;
      this.datos.cedula = item.item.original.cedula;

      this.medidorService.listaMedidoresCliente(item.item.original.idcliente)
          .subscribe(res => {
              this.medidores = res;
          });
  }

  listaLecturas(){
    this.medidorService.show(this.facturaGroup.value.idmedidor)
        .subscribe((medidor: any) => {
            this.datos.codigo_medidor = medidor.codigo;
        });

    this.medidorService.servicioMedidor(this.facturaGroup.value.idmedidor)
        .subscribe((servicio: any) => {
            console.log(servicio);
            this.datos.cuenta = servicio.idservicio
        });

    this.medidorService.listaLecturas(this.facturaGroup.value.idmedidor)
        .subscribe(res => {
            this.lecturas = res;
        });
  }

  pagar(idlectura, index) {
      return this.lecturaService.pagar(idlectura)
                 .subscribe((res: any)=> {
                     console.log(res);

                     this.factura.idfactura = res.idfactura;
                     this.factura.tarifa = res.tarifa;
                     this.factura.multa = res.multa;
                     this.factura.total = res.total;
                     this.lecturas.splice(index, 1, res.lectura);
                     this.print(res.idfactura);
                 });
  }

  getMesGestion(fecha_lectura) {
    const fecha = new Date(fecha_lectura);
    const mes_numero = fecha.getMonth()+1;
    const gestion = fecha.getFullYear();
    let mes = '';
    switch(mes_numero) {
        case 1: mes = 'Enero'; break;
        case 2: mes = 'Febrero'; break;
        case 3: mes = 'Marzo'; break;
        case 4: mes = 'Abril'; break;
        case 5: mes = 'Mayo'; break;
        case 6: mes = 'Junio'; break;
        case 7: mes = 'Julio'; break;
        case 8: mes = 'Agosto'; break;
        case 9: mes = 'Septiembre'; break;
        case 10: mes = 'Octubre'; break;
        case 11: mes = 'Noviembre'; break;
        case 12: mes = 'Diciembre'; break;
    }
    return mes + '/' + gestion;

  }

  verFactura(lectura) {
      this.lectura = lectura;
      this.datos = {
        mes_facturado: this.getMesGestion(lectura.fecha),
        cuenta: this.datos.cuenta,
        cliente: this.datos.cliente,
        cedula: this.datos.cedula,
        direccion: this.datos.direccion,
        codigo_medidor: this.datos.codigo_medidor
      };

      return this.lecturaService.verFactura(lectura.idlectura)
                 .subscribe((res: any) => {
                     this.ver = true;
                     this.factura.tarifa = res.tarifa;
                     this.factura.multa = res.multa;
                     this.factura.total = res.total;
                 });
                
  }

  print(idfactura): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window;
    popupWin.document.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.write(`
      <html>
        <head>
          <title>UTN</title>
          <style>        
          </style>
        </head>
        <body onload="window.print();window.close()">
        <table cellpadding=2 align="center">
            <tr>
            <th colspan="2">JUNTA ADMINISTRADORA DE AGUA POTABLE - "SAN JOSÉ DE CHORLAVÍ"</th>
            <th> 
            <img alt="JAAP" src="/assets/images/log.png" width="100"/>
            </th>
            </tr>
            <tr>
            <th colspan="2" align="center">Provincia Imbabura - cantón Ibarra</th>
            <th> Recibo # : ${idfactura}</th>
            </tr> 
        </table>
        <hr>
            ${printContents}
        </body>
      </html>`
    );
    
   popupWin.document.close();
}
}
