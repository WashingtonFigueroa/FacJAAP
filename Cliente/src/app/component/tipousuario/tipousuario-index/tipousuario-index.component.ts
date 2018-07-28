import { Component, OnInit } from '@angular/core';
import { TipousuarioService } from '../tipousuario.service';
import { NgbModal, ModalDismissReasons } from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-tipousuario-index',
  templateUrl: './tipousuario-index.component.html',
  styleUrls: ['./tipousuario-index.component.css']
})
export class TipousuarioIndexComponent implements OnInit {
  tipos: any = [];
  index: number = null;
  idtipo: number = null;
  closeResult: string;
  search = '';

  constructor(protected tipousuarioService: TipousuarioService,
    protected modalService: NgbModal,
    protected router: Router) {}

  ngOnInit() {
    this.tipousuarioService.index().subscribe(res => {
      this.tipos = res;
    });
  }

  destroy(index, id) {
    this.tipousuarioService.destroy(id)
      .subscribe(res => {
        this.tipos.splice(index, 1);
      });
  }

  edit(id) {
    this.router.navigate(['component/tipousuarios/editar/' + id]);
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
    this.idtipo = id;
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