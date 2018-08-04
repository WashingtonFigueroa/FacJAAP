import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MedidorService } from '../medidor.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-medidor-create',
  templateUrl: './medidor-create.component.html',
  styleUrls: ['./medidor-create.component.css']
})
export class MedidorCreateComponent implements OnInit {
  medidorGroup: FormGroup;
  successStatus = false;
  errorStatus = false;
  constructor(protected fb: FormBuilder,
              protected medidorService: MedidorService,
              protected router: Router) {
              this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
      this.medidorGroup = this.fb.group({
          'codigo' : new FormControl('',
              [Validators.required]),
          'observacion' : new FormControl('',
              [Validators.required]),
          'estado' : new FormControl('',
              [Validators.required])
      });
  }

  store() {
      this.medidorService.store(this.medidorGroup.value)
          .subscribe((res: any)=> {
              if (res.error) {
                  console.log(res.error);
                  this.errorStatus = true;
              } else {
                  console.log('medidor guardado');
                  this.successStatus = true;
                  this.router.navigate(['component/medidores']);
              }
          });
  }
}
