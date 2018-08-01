import { Component, OnInit } from '@angular/core';
import {FacturaService} from "../factura/factura.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  ventas_mes: any = [];

  ventas: any = {
      data: [
          {
              values: [],
              labels: [],
              type: 'pie',
          }
      ],
      layout: {
          height: 400,
          width: 500
      }
  };
  pieGroup: FormGroup;
  constructor(protected facturaService: FacturaService,
              protected fb: FormBuilder) {

      this.createForm();
  }

  ngOnInit() {
  }
  //reset pie
  reset() {
      this.ventas = {
          data: [
              {
                  values: [],
                  labels: [],
                  type: 'pie',
              }
          ],
          layout: {
              height: 400,
              width: 500
          }
      };
  }
  createForm() {
      this.pieGroup = this.fb.group({
          'start' : new FormControl('', Validators.required),
          'end' : new FormControl('', Validators.required),
      });
  }

  renderPie() {
      const start = this.pieGroup.value.start;
      const end = this.pieGroup.value.end;
      this.facturaService.ventasMes(start, end)
          .subscribe(res => {
              this.ventas_mes = res;
              this.reset();
              if (this.ventas_mes.length > 0){
                  this.ventas_mes.map((record:any) => {
                      //suma | mes
                      this.ventas.data[0].values.push(record.suma);
                      this.ventas.data[0].labels.push(record.mes);
                  });
              }
              console.log(this.ventas);
          });
  }

}
