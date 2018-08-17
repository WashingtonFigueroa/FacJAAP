import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-servicio-index',
  templateUrl: './servicio-index.component.html',
  styleUrls: ['./servicio-index.component.css']
})
export class ServicioIndexComponent implements OnInit {
  servicios: any = [];
  serviciosBK: any = [];
  index: number = null;
  idservico: number = null;
  closeResult: string;
  search = '';

  pages: any = [];
  prev_page: any = null;
  next_page: any = null;
  environment = environment;

  constructor(protected servicioService: ServicioService,
              protected modalService: NgbModal,
              protected router: Router) { }

  ngOnInit() {
    this.servicioService.index().subscribe((res: any) => {
      this.servicios = res.data;  
      this.serviciosBK = res.data;    
      this.getPages(res.last_page);
      this.prev_page = res.prev_page_url;
      this.next_page = res.next_page_url;
    });
  }

  buscar(search) {
    this.servicios = this.serviciosBK.filter((servicio: any)=> {
        return servicio.contribuyente.nombres.toLowerCase().indexOf(search) > -1 ||
        servicio.medidor.codigo.toLowerCase().indexOf(search) > -1;
    })
}

  getPages(last_page) {
    for (let i=1; i<=last_page; i++ ) {
      this.pages.push(
          {
              url: this.environment.base + 'servicios?page=' + i ,
              item: i
          }
      );
    }
  }
  loadPagination(url) {
    this.servicioService.indexPerPage(url)
        .subscribe((res: any)=> {
          this.servicios = res.data;
          this.prev_page = res.prev_page_url;
          this.next_page = res.next_page_url;
        });
  }
  prevPage() {
    this.servicioService.indexPerPage(this.prev_page)
        .subscribe( (res : any)=> {
          this.servicios = res.data;
          this.prev_page = res.prev_page_url;
          this.next_page = res.next_page_url;
        });
  }
  nextPage() {
      this.servicioService.indexPerPage(this.next_page)
          .subscribe( (res : any)=> {
              this.servicios = res.data;
              this.prev_page = res.prev_page_url;
              this.next_page = res.next_page_url;
          });
  }
  
  destroy(index, id) {
    this.servicioService.destroy(id)
      .subscribe(res => {
        this.servicios.splice(index, 1);
      });
  }
  edit(id) {
    this.router.navigate(['acceso/component/servicios/editar/' + id]);
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
    this.idservico = id;
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


}
