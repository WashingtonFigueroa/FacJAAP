import {Component, OnInit, ViewChild} from '@angular/core';
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
  @ViewChild('documento') documento;

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
      });
  }

  store() {
      const form =  new FormData();
      const file = this.documento.nativeElement;
      if (file.files[0]) {
          form.append('documento', file.files[0]);
          form.append('tipo', this.movimientoGroup.value.tipo);
          form.append('fecha', this.movimientoGroup.value.fecha);
          form.append('detalle', this.movimientoGroup.value.detalle);
          form.append('intermediario', this.movimientoGroup.value.intermediario);
          form.append('numfac', this.movimientoGroup.value.numfac);
          form.append('valor', this.movimientoGroup.value.valor);

          this.movimientoService.store(form)
              .subscribe(res => {
                  console.log('Material guardado');
                  this.router.navigate(['component/movimientos']);
                  this.successStatus = true;
              });
      }

  }
}
 