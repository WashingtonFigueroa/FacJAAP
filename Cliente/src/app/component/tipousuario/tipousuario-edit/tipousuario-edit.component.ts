import { Component, OnInit } from '@angular/core';
import { TipousuarioService } from '../tipousuario.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-tipousuario-edit',
  templateUrl: './tipousuario-edit.component.html',
  styleUrls: ['./tipousuario-edit.component.css']
})
export class TipousuarioEditComponent implements OnInit {
  idtipo: number = null;
  tipo: any = null;
  tipoGroup: FormGroup;

  constructor(protected tipoService: TipousuarioService,
              protected fb: FormBuilder,
              protected route: ActivatedRoute,
              protected router: Router) {

      this.route.params.subscribe(param => {
          this.idtipo = param.id;
          this.tipoService.show(param.id).subscribe(res => {
                  this.tipo = res;
                  this.createForm(res);
              });
      });

  }

  ngOnInit() {
  }

  createForm(tipo) {
      this.tipoGroup = this.fb.group({
          'nombre' : new FormControl(tipo.nombre, [Validators.required]),
          'estado' : new FormControl(tipo.estado, Validators.required)
      });
  }

  update() {
      this.tipoService.update(this.tipoGroup.value, this.idtipo)
          .subscribe(res => {
              this.router.navigate(['acceso/component/tipousuarios']);
              console.log('Tipo usuario Actualizado');
          });
  }

}
