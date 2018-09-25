import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { LecturaService } from '../lectura.service';
import { NgbModal, ModalDismissReasons } from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { Router } from '../../../../../node_modules/@angular/router';
import {ServicioService} from "../../servicio/servicio.service";
import { Angular5Csv } from "angular5-csv/Angular5-csv";

@Component({
  selector: 'app-lectura-index',
  templateUrl: './lectura-index.component.html',
  styleUrls: ['./lectura-index.component.css']
})
export class LecturaIndexComponent implements OnInit {
  lecturas: any = [];
  lecturasBK: any = [];
  
  index: number = null;
  idlectura: number = null;
  closeResult: string;
  search = '';

  pages: any = [];
  prev_page: any = null;
  next_page: any = null;
  environment = environment;

  constructor(protected lecturaService: LecturaService,
              protected modalService: NgbModal,
              protected servicioService: ServicioService,
              protected router: Router) { }

  ngOnInit() {
    this.lecturaService.index().subscribe((res: any) => {
      this.lecturas = res.data;
      this.lecturasBK = res.data;
      this.getPages(res.last_page);
      this.prev_page = res.prev_page_url;
      this.next_page = res.next_page_url;
    });
  }

  buscar(search) {
    this.lecturas = this.lecturasBK.filter((lectura: any)=> {
        return lectura.servicio.contribuyente.nombres.toLowerCase().indexOf(search) > -1 ||
               lectura.fecha.toLowerCase().indexOf(search) > -1 ||
               lectura.estado.toLowerCase().indexOf(search) > -1;
    })
}

  getPages(last_page) {
    for (let i=1; i<=last_page; i++ ) {
      this.pages.push(
          {
              url: this.environment.base + 'lecturas?page=' + i ,
              item: i
          }
      );
    }
  }
  loadPagination(url) {
    this.lecturaService.indexPerPage(url)
        .subscribe((res: any)=> {
          this.lecturas = res.data;
          this.prev_page = res.prev_page_url;
          this.next_page = res.next_page_url;
        });
  }
  prevPage() {
    this.lecturaService.indexPerPage(this.prev_page)
        .subscribe( (res : any)=> {
          this.lecturas = res.data;
          this.prev_page = res.prev_page_url;
          this.next_page = res.next_page_url;
        });
  }
  nextPage() {
      this.lecturaService.indexPerPage(this.next_page)
          .subscribe( (res : any)=> {
              this.lecturas = res.data;
              this.prev_page = res.prev_page_url;
              this.next_page = res.next_page_url;
          });
  }
  destroy(index, id) {
    this.lecturaService.destroy(id)
      .subscribe(res => {
        this.lecturas.splice(index, 1);
      });
  }
  edit(id) {
    this.router.navigate(['component/lecturas/editar/' + id]);
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  confirm(index, id, confirmModal){
    this.index = index;
    this.idlectura = id;
    this.modalService.open(confirmModal).result.then((result)=>{
      if (result === 'si') {
        this.destroy(index, id);
    } else {
        console.log(result);
    }
    this.closeResult = `Closed with: ${result}`;
    }, (reason)=>{
      console.log('cancel');
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

    export() {
        const date = new Date();
        const now = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
        this.lecturaService.exporarExcel_lecturas().subscribe(servicios => {
            const csv = new Angular5Csv(servicios, 'lecturas-' + now , {
                fieldSeparator: ';',
                headers: ["Numero Servicio", "Nombres del Usuario", "observación","Fecha","Lectura Anterior","Lectura Actual","Consumo","Excedente","Tarifa","Estado"]
            });
        });
    }

}
