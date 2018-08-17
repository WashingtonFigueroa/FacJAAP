import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Angular5Csv } from "angular5-csv/Angular5-csv";
import { environment } from '../../../../environments/environment.prod';
import {timeout} from 'rxjs/operators/timeout';

@Component({
  selector: 'app-cliente-index',
  templateUrl: './cliente-index.component.html',
  styleUrls: ['./cliente-index.component.css']
})
export class ClienteIndexComponent implements OnInit {
  
  clientes: any = [];
  index: number = null;
  idcliente: number = null;
  closeResult: string;
  search = '';

  pages: any = [];
  prev_page: any = null;
  next_page: any = null; 
  environment = environment;


  constructor(protected clienteService: ClienteService,
              protected modalService: NgbModal,
              protected router: Router) {}

  ngOnInit() {
    this.clienteService.index().subscribe((res: any) => {
      this.clientes = res.data;
      this.getPages(res.last_page);
      this.prev_page = res.prev_page_url;
      this.next_page = res.next_page_url;
    });
  }

  buscar(search) {
    this.clienteService.buscarCliente({ search: search })
      .subscribe((res: any)  => {
        this.clientes = res.data;
      });
  }

  getPages(last_page) {
    for (let i=1; i<=last_page; i++ ) {
      this.pages.push(
          {
              url: this.environment.base + 'clientes?page=' + i ,
              item: i
          }
      );
    }
  }
  loadPagination(url) {
    this.clienteService.indexPerPage(url)
        .subscribe((res: any)=> {
          this.clientes = res.data;
          this.prev_page = res.prev_page_url;
          this.next_page = res.next_page_url;
        });
  }
  prevPage() {
    this.clienteService.indexPerPage(this.prev_page)
        .subscribe( (res : any)=> {
          this.clientes = res.data;
          this.prev_page = res.prev_page_url;
          this.next_page = res.next_page_url;
        });
  }
  nextPage() {
      this.clienteService.indexPerPage(this.next_page)
          .subscribe( (res : any)=> {
              this.clientes = res.data;
              this.prev_page = res.prev_page_url;
              this.next_page = res.next_page_url;
          });
  }

  destroy(index, id) {
    this.clienteService.destroy(id)
      .subscribe(res => {
        this.clientes.splice(index, 1);
      });
  }

  edit(id) {
    this.router.navigate(['acceso/component/clientes/editar/' + id]);
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
    this.idcliente = id;
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
  export() {
    const date = new Date();
    const now = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
    this.clienteService.listaClientes().subscribe(clientes => {
      const csv = new Angular5Csv(clientes, 'clientes-' + now , {
        fieldSeparator: ';'
      });
    });
  }
}

