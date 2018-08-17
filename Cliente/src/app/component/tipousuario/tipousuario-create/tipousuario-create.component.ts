import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TipousuarioService } from '../tipousuario.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-tipousuario-create',
  templateUrl: './tipousuario-create.component.html',
  styleUrls: ['./tipousuario-create.component.css']
})
export class TipousuarioCreateComponent implements OnInit {
  tipoGroup: FormGroup;

  constructor(protected fb: FormBuilder,
              protected tipousuarioService: TipousuarioService,
              protected router: Router) {
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
              this.router.navigate(['acceso/component/tipousuarios']);
            });
  }
}
