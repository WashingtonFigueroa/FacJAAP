import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ParametroService } from '../parametro.service';

@Component({
  selector: 'app-parametro-create',
  templateUrl: './parametro-create.component.html',
  styleUrls: ['./parametro-create.component.css']
})
export class ParametroCreateComponent implements OnInit {
  parametroGroup: FormGroup;
  successStatus = false;
  constructor(protected fb: FormBuilder,
              protected parametroService: ParametroService) {
      this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
      this.parametroGroup = this.fb.group({
          'descripcion' : new FormControl('',[Validators.required]),
          'valor' : new FormControl('',[Validators.required]),
          'detalle' : new FormControl('',[Validators.required]),
          'estado' : "Activo"
      });
  }

  store() {
      this.parametroService.store(this.parametroGroup.value)
          .subscribe(res => {
              console.log('parametro guardado');
              this.parametroGroup.reset();
              this.parametroGroup.patchValue({'estado': 'Activo'});
              this.successStatus = true;
          });
  }
}
