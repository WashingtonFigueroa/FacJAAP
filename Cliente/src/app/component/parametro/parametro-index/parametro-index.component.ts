import { Component, OnInit } from '@angular/core';
import { ParametroService } from '../parametro.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parametro-index',
  templateUrl: './parametro-index.component.html',
  styleUrls: ['./parametro-index.component.css']
})
export class ParametroIndexComponent implements OnInit {

  parametros: any = [];
  index: number = null;
  idparametro: number = null;
  closeResult: string;
  search = '';

  constructor(protected parametroService: ParametroService,
              protected modalService: NgbModal,
              protected router: Router) {}

  ngOnInit() {
    this.parametroService.index().subscribe(res => {
      this.parametros = res;
    });
  }

  destroy(index, id) {
    this.parametroService.destroy(id)
      .subscribe(res => {
        this.parametros.splice(index, 1);
      });
  }

  edit(id) {
    this.router.navigate(['component/parametros/editar/' + id]);
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
