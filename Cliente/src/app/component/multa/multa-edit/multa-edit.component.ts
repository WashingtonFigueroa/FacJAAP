import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
import { MultaService } from '../multa.service';
import { ServicioService } from '../../servicio/servicio.service';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import { ClienteService } from '../../cliente/cliente.service';
import { MedidorService } from '../../medidor/medidor.service';

@Component({
  selector: 'app-multa-edit',
  templateUrl: './multa-edit.component.html',
  styleUrls: ['./multa-edit.component.css']
})
export class MultaEditComponent implements OnInit {
  idmulta: number = null;
  multa: any = null;
  clientes: any = null;
  medidores: any = null;
  servicio: any = null;
  multaGroup: FormGroup;

  constructor(protected multaService: MultaService,
    protected servicioService: ServicioService,
    protected clienteService: ClienteService,
    protected medidorService: MedidorService,
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    protected router: Router) {
    this.clienteService.listaClientes().subscribe(res => this.clientes = res);
    this.servicioService.index().subscribe(res => this.servicio = res);

    this.route.params.subscribe(param => {
      this.idmulta = param.id;
      this.multaService.show(param.id).subscribe(res => {
          this.multa = res;
          this.createForm(res);
        });
    });

  }

  ngOnInit() {}

  createForm(multa) {
    this.multaGroup = this.fb.group({
      // 'idcliente' : new FormControl(0, [Validators.required]),
      // 'idmedidor' : new FormControl(0, [Validators.required]),
      'descripcion': new FormControl(multa.descripcion, [Validators.required]),
      'valor': new FormControl(multa.valor, [Validators.required]),
      'fecha': new FormControl(multa.fecha, [Validators.required]),
      'estado': "Deber"


    });
  }
  
  update() {
    this.multaService.update(this.multaGroup.value, this.idmulta)
      .subscribe(res => {
        this.router.navigate(['acceso/component/multas']);
        console.log(res);
      });
  }

  listaMedidoresCliente() {
    console.log('multas');
    const idcliente = this.multaGroup.value.idcliente;
    this.medidorService.listaMedidoresCliente(idcliente)
        .subscribe(res => this.medidores = res);
}

}