import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {
  idcliente: number = null;
  cliente: any = null;
  clienteGroup: FormGroup;

  constructor(protected clienteService: ClienteService,
              protected fb: FormBuilder,
              protected route: ActivatedRoute,
              protected router: Router) {

      this.route.params.subscribe(param => {
          this.idcliente = param.id;
          this.clienteService.show(param.id)
              .subscribe(res => {
                  this.cliente = res;
                  this.createForm(res);
              });
      });
  }

  ngOnInit() {
  }

  createForm(cliente) {
      this.clienteGroup = this.fb.group({
          'cedula' : new FormControl(cliente.cedula, Validators.required),
          'nombres' : new FormControl(cliente.nombres, Validators.required),
          'direccion' : new FormControl(cliente.direccion, Validators.required),
          'email' : new FormControl(cliente.email, Validators.required),
          'telefono' : new FormControl(cliente.telefono, Validators.required),
          'referencia' : new FormControl(cliente.referencia, Validators.required),
          'observacion' : new FormControl(cliente.observacion, Validators.required)
      });
  }


  update() {
      this.clienteService.update(this.clienteGroup.value, this.idcliente)
          .subscribe(res => {
              this.router.navigate(['acceso/component/clientes']);
          });
  }
}
