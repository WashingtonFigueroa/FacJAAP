import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {
  clienteGroup: FormGroup;

  constructor(protected fb: FormBuilder,
              protected clienteService: ClienteService) {
              this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
      this.clienteGroup = this.fb.group({
          'cedula' : new FormControl('',
              [Validators.required]),
          'nombres' : new FormControl('',
              [Validators.required]),
          'direccion' : new FormControl('',
              [Validators.required]),
          'email' : new FormControl('',
              [Validators.required]),
          'telefono' : new FormControl('',
              [Validators.required]),
          'referencia' : new FormControl('',
              [Validators.required]),
          'observacion' : new FormControl('',
              [Validators.required])
      });
  }

  store() {
      this.clienteService.store(this.clienteGroup.value)
          .subscribe(res => {
              console.log('cliente guardado');
              this.clienteGroup.reset();
          });
  }
}
