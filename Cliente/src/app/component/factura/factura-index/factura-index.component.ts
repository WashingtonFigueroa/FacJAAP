import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { FacturaService } from '../factura.service';
import { NgbModal, ModalDismissReasons } from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-factura-index',
  templateUrl: './factura-index.component.html',
  styleUrls: ['./factura-index.component.css']
})
export class FacturaIndexComponent implements OnInit {
  
  facturas: any = [];
  facturasBK: any = [];
  index: number = null;
  idfactura: number = null;
  closeResult: string;
  search = '';

  pages: any = [];
  prev_page: any = null;
  next_page: any = null; 
  environment = environment;

  constructor(protected facturaservice: FacturaService,
              protected modalService: NgbModal,
              protected router: Router) {}

  ngOnInit() {
    this.facturaservice.index().subscribe((res: any) => {
      this.facturas = res.data;
      this.facturasBK = res.data;
      this.getPages(res.last_page);
      this.prev_page = res.prev_page_url;
      this.next_page = res.next_page_url;
    });
  }

  buscar(search) {
      this.facturas = this.facturasBK.filter((factura: any)=> {
          return factura.numero.toLowerCase().indexOf(search) > -1 ||
                 factura.responsable.toLowerCase().indexOf(search) > -1 ||
                 factura.fecha.toLowerCase().indexOf(search) > -1;
      })
  }

  getPages(last_page) {
    for (let i=1; i<=last_page; i++ ) {
      this.pages.push(
          {
              url: this.environment.base + 'facturas?page=' + i ,
              item: i
          }
      );
    }
  }
  loadPagination(url) {
    this.facturaservice.indexPerPage(url)
        .subscribe((res: any)=> {
          this.facturas = res.data;
          this.prev_page = res.prev_page_url;
          this.next_page = res.next_page_url;
        });
  }
  prevPage() {
    this.facturaservice.indexPerPage(this.prev_page)
        .subscribe( (res : any)=> {
          this.facturas = res.data;
          this.prev_page = res.prev_page_url;
          this.next_page = res.next_page_url;
        });
  }
  nextPage() {
      this.facturaservice.indexPerPage(this.next_page)
          .subscribe( (res : any)=> {
              this.facturas = res.data;
              this.prev_page = res.prev_page_url;
              this.next_page = res.next_page_url;
          });
  }

  destroy(index, id) {
    this.facturaservice.destroy(id)
      .subscribe(res => {
        this.facturas.splice(index, 1);
      });
  }

  edit(id) {
    this.router.navigate(['component/facturas/editar/' + id]);
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
    this.idfactura = id;
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