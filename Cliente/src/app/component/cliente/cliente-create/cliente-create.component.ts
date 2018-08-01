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
  successStatus = false;

  constructor(protected fb: FormBuilder,
              protected clienteService: ClienteService) {
              this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
      this.clienteGroup = this.fb.group({
          'cedula' : new FormControl('', [Validators.required, Validators.pattern(/^\d{13}$/)]),
          'nombres' : new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z ]{10,100}$/)]),
          'direccion' : new FormControl('', [Validators.required]),
          'email' : new FormControl('', [Validators.required]),
          'telefono' : new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
          'referencia' : new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
          'observacion' : new FormControl('', [Validators.required])
      });
  }

  store() {
      this.clienteService.store(this.clienteGroup.value)
          .subscribe(res => {
              console.log('cliente guardado');
              this.clienteGroup.reset();
              this.successStatus = true;
          });
  }
}
 