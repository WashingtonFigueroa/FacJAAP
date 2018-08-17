import { Component, OnInit } from '@angular/core';
import { ParametroService } from '../parametro.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-parametro-index',
  templateUrl: './parametro-index.component.html',
  styleUrls: ['./parametro-index.component.css']
})
export class ParametroIndexComponent implements OnInit {

  parametros: any = [];
  parametrosBK: any = [];
  index: number = null;
  idparametro: number = null; 
  closeResult: string;
  search = '';

  pages: any = [];
  prev_page: any = null;
  next_page: any = null; 
  environment = environment;
 
  constructor(protected parametroService: ParametroService,
              protected modalService: NgbModal,
              protected router: Router) {}

  ngOnInit() {
    this.parametroService.index().subscribe((res: any) => {
      this.parametros = res.data;
      this.parametrosBK = res.data;
      this.getPages(res.last_page);
      this.prev_page = res.prev_page_url;
      this.next_page = res.next_page_url;
    });
  }

  buscar(search) {
    this.parametros = this.parametrosBK.filter((parametro: any)=> {
        return parametro.descripcion.toLowerCase().indexOf(search) > -1;
    })
}

  getPages(last_page) {
    for (let i=1; i<=last_page; i++ ) {
      this.pages.push(
          {
              url: this.environment.base + 'parametros?page=' + i ,
              item: i
          }
      );
    }
  }
  loadPagination(url) {
    this.parametroService.indexPerPage(url)
        .subscribe((res: any)=> {
          this.parametros = res.data;
          this.prev_page = res.prev_page_url;
          this.next_page = res.next_page_url;
        });
  }
  prevPage() {
    this.parametroService.indexPerPage(this.prev_page)
        .subscribe( (res : any)=> {
          this.parametros = res.data;
          this.prev_page = res.prev_page_url;
          this.next_page = res.next_page_url;
        });
  }
  nextPage() {
      this.parametroService.indexPerPage(this.next_page)
          .subscribe( (res : any)=> {
              this.parametros = res.data;
              this.prev_page = res.prev_page_url;
              this.next_page = res.next_page_url;
          });
  }

  destroy(index, id) {
    this.parametroService.destroy(id)
      .subscribe(res => {
        this.parametros.splice(index, 1);
      });
  }

  edit(id) {
    this.router.navigate(['acceso/component/parametros/editar/' + id]);
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
  
  confirm(index, id, confirmModal) {
    this.index = index;
    this.idparametro = id;
    this.modalService.open(confirmModal).result.then((result) => {
      if (result === 'si') {
        this.destroy(index, id);
      } else {
        console.log(result);
      }
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      console.log('cancel');
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

}

