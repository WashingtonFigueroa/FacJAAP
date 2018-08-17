import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
import { MaterialService } from '../material.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-material-create',
  templateUrl: './material-create.component.html',
  styleUrls: ['./material-create.component.css']
})
export class MaterialCreateComponent implements OnInit {
  materialGroup: FormGroup;
  successStatus = false;

  constructor(protected fb: FormBuilder,
              protected materialService: MaterialService,
              protected router: Router) {
              this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
      this.materialGroup = this.fb.group({
          'nombre' : new FormControl('', [Validators.required]),
          'descripcion' : new FormControl('', [Validators.required]),
          'stock' : 0

      });
  }

  store() {
      this.materialService.store(this.materialGroup.value)
          .subscribe(res => {
              this.router.navigate(['acceso/component/materiales']);
              this.successStatus = true;
          });
  }
}
 