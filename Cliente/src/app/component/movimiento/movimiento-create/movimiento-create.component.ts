import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
import { MovimientoService } from '../movimiento.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-movimiento-create',
  templateUrl: './movimiento-create.component.html',
  styleUrls: ['./movimiento-create.component.css']
})
export class MovimientoCreateComponent implements OnInit {
  movimientoGroup: FormGroup;
  successStatus = false;

  constructor(protected fb: FormBuilder,
              protected movimientoService: MovimientoService,
              protected router: Router) {
              this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
      this.movimientoGroup = this.fb.group({
          'tipo' : new FormControl('', [Validators.required]),
          'fecha' : new FormControl('', [Validators.required]),
          'detalle' : new FormControl('', [Validators.required]),
          'intermediario' : new FormControl('', [Validators.required]),
          'numfac' : new FormControl('', [Validators.required]),
          'valor' : new FormControl('', [Validators.required]),
          'domumento' : new FormControl('', [Validators.required])
      });
  }

  store() {
      this.movimientoService.store(this.movimientoGroup.value)
          .subscribe(res => {
              console.log('Material guardado');
              this.router.navigate(['component/materiales']);
              this.successStatus = true;
          });
  }
}
 