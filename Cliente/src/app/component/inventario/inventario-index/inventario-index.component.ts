import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { InventarioService } from '../inventario.service';
import { NgbModal, ModalDismissReasons } from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-inventario-index',
  templateUrl: './inventario-index.component.html',
  styleUrls: ['./inventario-index.component.css']
})
export class InventarioIndexComponent implements OnInit {
  inventarios: any = [];
  inventariosBK: any = [];
  
  index: number = null;
  idinventario: number = null;

  closeResult: string;
  search = '';
  pages: any = [];
  prev_page: any = null;
  next_page: any = null;

  environment = environment;
  
  constructor(protected inventarioService: InventarioService,
              protected modalService: NgbModal,
              protected router: Router) { }

  ngOnInit() {
    this.inventarioService.index().subscribe((res: any) => {
      this.inventarios = res.data;
      this.inventariosBK = res.data;
        this.getPages(res.last_page);
        this.prev_page = res.prev_page_url;
        this.next_page = res.next_page_url;
    });
  }

  buscar(search) {
    this.inventarios = this.inventariosBK.filter((inventario: any)=> {
        return inventario.material.nombre.toLowerCase().indexOf(search) > -1 ||
               inventario.descripcion.toLowerCase().indexOf(search) > -1 ||
               inventario.fecha.toLowerCase().indexOf(search) > -1;
    })
}

  getPages(last_page) {
    for (let i=1; i<=last_page; i++ ) {
      this.pages.push(
          {
              url: this.environment.base + 'inventarios?page=' + i ,
              item: i
          }
      );
    }
  }
  loadPagination(url) {
    this.inventarioService.indexPerPage(url)
        .subscribe((res: any)=> {
          this.inventarios = res.data;
          this.prev_page = res.prev_page_url;
          this.next_page = res.next_page_url;
        });
  }
  prevPage() {
    this.inventarioService.indexPerPage(this.prev_page)
        .subscribe( (res : any)=> {
          this.inventarios = res.data;
          this.prev_page = res.prev_page_url;
          this.next_page = res.next_page_url;
        });
  }
  nextPage() {
      this.inventarioService.indexPerPage(this.next_page)
          .subscribe( (res : any)=> {
              this.inventarios = res.data;
              this.prev_page = res.prev_page_url;
              this.next_page = res.next_page_url;
          });
  }

  destroy(index, id) {
    this.inventarioService.destroy(id).subscribe(res => {
        this.inventarios.splice(index, 1);
      });
  }

  edit(id) {
    this.router.navigate(['component/inventarios/editar/' + id]);
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
    this.idinventario = id;
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
