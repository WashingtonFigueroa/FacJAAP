import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MedidorService } from '../medidor.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-medidor-index',
  templateUrl: './medidor-index.component.html',
  styleUrls: ['./medidor-index.component.css']
})
export class MedidorIndexComponent implements OnInit {
  
  medidores: any = [];
  medidoresBK: any = [];
  index: number = null;
  idmedidor: number = null;
  closeResult: string;
  search = '';

  pages: any = [];
  prev_page: any = null;
  next_page: any = null; 
  environment = environment;

  constructor(protected medidorService: MedidorService,
              protected modalService: NgbModal,
              protected router: Router) {}

  ngOnInit() {
    this.medidorService.index().subscribe((res: any) => {
      this.medidores = res.data;
      this.medidoresBK = res.data;
      this.getPages(res.last_page);
      this.prev_page = res.prev_page_url;
      this.next_page = res.next_page_url;
    });
  }

  buscar(search) {
    this.medidores = this.medidoresBK.filter((medidor: any)=> {
        return medidor.codigo.toLowerCase().indexOf(search) > -1;
    })
}
  getPages(last_page) {
    for (let i=1; i<=last_page; i++ ) {
      this.pages.push(
          {
              url: this.environment.base + 'medidores?page=' + i ,
              item: i
          }
      );
    }
  }
  loadPagination(url) {
    this.medidorService.indexPerPage(url)
        .subscribe((res: any)=> {
          this.medidores = res.data;
          this.prev_page = res.prev_page_url;
          this.next_page = res.next_page_url;
        });
  }
  prevPage() {
    this.medidorService.indexPerPage(this.prev_page)
        .subscribe( (res : any)=> {
          this.medidores = res.data;
          this.prev_page = res.prev_page_url;
          this.next_page = res.next_page_url;
        });
  }
  nextPage() {
      this.medidorService.indexPerPage(this.next_page)
          .subscribe( (res : any)=> {
              this.medidores = res.data;
              this.prev_page = res.prev_page_url;
              this.next_page = res.next_page_url;
          });
  }

  destroy(index, id) {
    this.medidorService.destroy(id)
      .subscribe(res => {
        this.medidores.splice(index, 1);
      });
  }

  edit(id) {
    this.router.navigate(['acceso/component/medidores/editar/' + id]);
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
    this.idmedidor = id;
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

