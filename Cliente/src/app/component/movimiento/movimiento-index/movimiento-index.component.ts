import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { MovimientoService } from '../movimiento.service';
import { NgbModal, ModalDismissReasons } from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-movimiento-index',
  templateUrl: './movimiento-index.component.html',
  styleUrls: ['./movimiento-index.component.css']
})
export class MovimientoIndexComponent implements OnInit {

  movimientos: any = [];
  movimientosBK: any = [];
  index: number = null;
  idmovimiento: number = null;
  closeResult: string;
  search = '';

  pages: any = [];
  prev_page: any = null;
  next_page: any = null; 
  environment = environment;

  constructor(protected movimientoService: MovimientoService,
              protected modalService: NgbModal,
              protected router: Router) {}

  ngOnInit() {
    this.movimientoService.index().subscribe((res: any) => {
      this.movimientos = res.data;
      this.movimientosBK = res.data;
      this.getPages(res.last_page);
      this.prev_page = res.prev_page_url;
      this.next_page = res.next_page_url;
    });
  }

  buscar(search) {
      this.movimientos = this.movimientosBK.filter((movimiento: any)=> {
          return movimiento.tipo.toLowerCase().indexOf(search) > -1;
      })
  }

  getPages(last_page) {
    for (let i=1; i<=last_page; i++ ) {
      this.pages.push(
          {
              url: this.environment.base + 'movimientos?page=' + i ,
              item: i
          }
      );
    }
  }
  loadPagination(url) {
    this.movimientoService.indexPerPage(url)
        .subscribe((res: any)=> {
          this.movimientos = res.data;
          this.prev_page = res.prev_page_url;
          this.next_page = res.next_page_url;
        });
  }
  prevPage() {
    this.movimientoService.indexPerPage(this.prev_page)
        .subscribe( (res : any)=> {
          this.movimientos = res.data;
          this.prev_page = res.prev_page_url;
          this.next_page = res.next_page_url;
        });
  }
  nextPage() {
      this.movimientoService.indexPerPage(this.next_page)
          .subscribe( (res : any)=> {
              this.movimientos = res.data;
              this.prev_page = res.prev_page_url;
              this.next_page = res.next_page_url;
          });
  }

  destroy(index, id) {
    this.movimientoService.destroy(id)
      .subscribe(res => {
        this.movimientos.splice(index, 1);
      });
  }

  edit(id) {
    this.router.navigate(['acceso/component/movimientos/editar/' + id]);
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
    this.idmovimiento = id;
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
