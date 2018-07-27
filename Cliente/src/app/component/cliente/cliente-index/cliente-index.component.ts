import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

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

  constructor(protected clienteService: ClienteService,
              protected modalService: NgbModal,
              protected router: Router) {}

  ngOnInit() {
    this.clienteService.index().subscribe(res => {
      this.clientes = res;
    });
  }

  destroy(index, id) {
    this.clienteService.destroy(id)
      .subscribe(res => {
        this.clientes.splice(index, 1);
      });
  }

  edit(id) {
    this.router.navigate(['component/clientes/editar/' + id]);
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

}

