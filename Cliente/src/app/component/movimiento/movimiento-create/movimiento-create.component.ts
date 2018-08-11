import {Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
import { MovimientoService } from '../movimiento.service';
import { Router } from '../../../../../node_modules/@angular/router';
import {ToastrService} from "ngx-toastr";

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
              protected router: Router,
              protected toastr: ToastrService) {
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
        const Ingfecha = this.movimientoGroup.value.fecha;
        var f = new Date();
        const Sisfecha = f.getFullYear() + "-" + (f.getMonth() +1) + "-" + f.getDate();        
    if( (new Date(Ingfecha).getTime() <= new Date(Sisfecha).getTime())) {
        if (file.files[0]) {
            form.append('documento', file.files[0]);
            form.append('tipo', this.movimientoGroup.value.tipo);
            form.append('fecha', this.movimientoGroup.value.fecha);
            form.append('detalle', this.movimientoGroup.value.detalle);
            form.append('intermediario', this.movimientoGroup.value.intermediario);
            form.append('numfac', this.movimientoGroup.value.numfac);
            form.append('valor', this.movimientoGroup.value.valor);         
        }else{
        form.append('tipo', this.movimientoGroup.value.tipo);
        form.append('fecha', this.movimientoGroup.value.fecha);
        form.append('detalle', this.movimientoGroup.value.detalle);
        form.append('intermediario', this.movimientoGroup.value.intermediario);
        form.append('numfac', this.movimientoGroup.value.numfac);
        form.append('valor', this.movimientoGroup.value.valor);
        }
        this.movimientoService.store(form)
        .subscribe((res: any)=> {
            console.log('Movimiento guardado');
            this.toastr.success(res.message, res.title, {
                timeOut: 1000
            });
            setTimeout(()=>{
                this.router.navigate(['/acceso/component/movimientos']);
            }, 1000);
            this.successStatus = true;
        }, (error: any)=> {
            this.toastr.error(error.message, error.title)
        }, () => {
            console.log('completed subscription! :D');
        });
    }else{
        const message = 'La fecha ingresada es mayor a la fecha actual';
        this.toastr.error(message, 'Error de ingreso de datos', {
            timeOut: 5000
        });
    }

  }
}
 