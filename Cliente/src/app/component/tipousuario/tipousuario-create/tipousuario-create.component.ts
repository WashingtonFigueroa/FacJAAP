import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TipousuarioService } from '../tipousuario.service';

@Component({
  selector: 'app-tipousuario-create',
  templateUrl: './tipousuario-create.component.html',
  styleUrls: ['./tipousuario-create.component.css']
})
export class TipousuarioCreateComponent implements OnInit {
  tipoGroup: FormGroup;

  constructor(protected fb: FormBuilder,
              protected tipousuarioService: TipousuarioService) {
      this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
      this.tipoGroup = this.fb.group({
          'nombre' : new FormControl('',[Validators.required]),
          'estado' : new FormControl('',[Validators.required])
      });
  }

  store() {
      this.tipousuarioService.store(this.tipoGroup.value)
          .subscribe(res => {
              console.log('tipo usuario guardado');
              this.tipoGroup.reset();
          });
  }
}
