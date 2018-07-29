import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LecturaService } from '../lectura.service';
import { ServicioService } from '../../servicio/servicio.service';

@Component({
  selector: 'app-lectura-create',
  templateUrl: './lectura-create.component.html',
  styleUrls: ['./lectura-create.component.css']
})
export class LecturaCreateComponent implements OnInit {

  servicios: any = null;
  lecturaGroup: FormGroup;

  constructor(protected lecturaService: LecturaService,
              protected servicioService: ServicioService,
              protected fb: FormBuilder) {
    this.servicioService.index().subscribe(res => this.servicios = res);

    
    this.createForm();
  }

  ngOnInit() {  
  }

  createForm() {
    this.lecturaGroup = this.fb.group({
      'idservicio' : new FormControl(0, [Validators.required]),
      'observacion' : new FormControl('', [Validators.required]),
      'fecha' : new FormControl('', [Validators.required]),
      'actual' : new FormControl('', [Validators.required]),
      'estado' : new FormControl('', [Validators.required])
    });
  }

  store() {
    this.lecturaService.store(this.lecturaGroup.value)
        .subscribe(res => {
            this.lecturaGroup.patchValue({
                observacion: '',
                fecha: '',
                actual: '',
                estado: ''
            });
           
        });
  }

}
