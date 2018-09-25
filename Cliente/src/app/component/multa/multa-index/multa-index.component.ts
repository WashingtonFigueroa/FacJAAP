import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { MultaService } from '../multa.service';
import { NgbModal, ModalDismissReasons } from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { ServicioService } from '../../servicio/servicio.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { Angular5Csv } from "angular5-csv/Angular5-csv";

@Component({
  selector: 'app-multa-index',
  templateUrl: './multa-index.component.html',
  styleUrls: ['./multa-index.component.css']
})
export class MultaIndexComponent implements OnInit {
  multas: any = [];
  multasBK: any = [];

  index: number = null;
  idmulta: number = null;
  closeResult: string;
  search = '';
  
  pages: any = [];
  prev_page: any = null;
  next_page: any = null;
  environment = environment;

  constructor(protected multaService: MultaService,
              protected modalService: NgbModal,
              protected servicioService: ServicioService,
              protected router: Router) { }

  ngOnInit() {
    this.multaService.index().subscribe((res: any) => {
      this.multas = res.data;
      this.multasBK = res.data;
      this.getPages(res.last_page);
      this.prev_page = res.prev_page_url;
      this.next_page = res.next_page_url;
    });
  }

  buscar(search) {
    this.multas = this.multasBK.filter((multa: any)=> {
        return multa.servicio.contribuyente.nombres.toLowerCase().indexOf(search) > -1 ||
               multa.fecha.toLowerCase().indexOf(search) > -1 ||
               multa.estado.toLowerCase().indexOf(search) > -1;
    })
}

  getPages(last_page) {
    for (let i=1; i<=last_page; i++ ) {
      this.pages.push(
          {
              url: this.environment.base + 'multas?page=' + i ,
              item: i
          }
      );
    }
  }
  loadPagination(url) {
    this.multaService.indexPerPage(url)
        .subscribe((res: any)=> {
          this.multas = res.data;
          this.prev_page = res.prev_page_url;
          this.next_page = res.next_page_url;
        });
  }
  prevPage() {
    this.multaService.indexPerPage(this.prev_page)
        .subscribe( (res : any)=> {
          this.multas = res.data;
          this.prev_page = res.prev_page_url;
          this.next_page = res.next_page_url;
        });
  }
  nextPage() {
      this.multaService.indexPerPage(this.next_page)
          .subscribe( (res : any)=> {
              this.multas = res.data;
              this.prev_page = res.prev_page_url;
              this.next_page = res.next_page_url;
          });
  }
  destroy(index, id) {
    this.multaService.destroy(id)
      .subscribe(res => {
        this.multas.splice(index, 1);
      });
  }
  edit(id) {
    this.router.navigate(['acceso/component/multas/editar/' + id]);
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
    this.idmulta = id;
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
        this.multaService.exporarExcel_multas().subscribe(servicios => {
            const csv = new Angular5Csv(servicios, 'multas-' + now , {
                fieldSeparator: ';',
                headers: ["Numero Servicio", "Nombres del Usuario", "Descripcion", "Valor"]
            });
        });
    }


}
