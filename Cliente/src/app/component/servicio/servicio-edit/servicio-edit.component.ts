import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ServicioService } from '../servicio.service';
import { ClienteService } from '../../cliente/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MedidorService } from '../../medidor/medidor.service';

@Component({
  selector: 'app-servicio-edit',
  templateUrl: './servicio-edit.component.html',
  styleUrls: ['./servicio-edit.component.css']
})
export class ServicioEditComponent implements OnInit {
  idservicio: number = null;
  servicio: any = null;
  clientes: any = null;
  medidores: any = null;
  servicioGroup: FormGroup;

  constructor(protected servicioService: ServicioService,
    protected clienteService: ClienteService,
    protected medidoresService: MedidorService,
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    protected router: Router) {

    this.clienteService.index().subscribe(res => this.clientes = res);
    this.medidoresService.index().subscribe(res => this.medidores = res);

    this.route.params.subscribe(param => {
      this.idservicio = param.id;
      this.servicioService.show(param.id)
        .subscribe(res => {
          this.servicio = res;
          this.createForm(res);
        });
    });
  }

  ngOnInit() {}

  createForm(servicio) {
    this.servicioGroup = this.fb.group({
      'idcliente': new FormControl(servicio.idcliente, [Validators.required]),
      'idmedidor': new FormControl(servicio.idmedidor, [Validators.required]),
      'fecha': new FormControl(servicio.fecha, [Validators.required]),
      'observacion': new FormControl(servicio.observacion, [Validators.required]),
      'estado': new FormControl(servicio.estado, [Validators.required])
    });
  }

  update() {
    this.servicioService.update(this.servicioGroup.value, this.idservicio)
      .subscribe(res => {
        this.router.navigate(['component/servicios']);
        console.log(res);
      });
  }

}