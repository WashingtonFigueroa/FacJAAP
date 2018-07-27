import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MedidorService } from '../medidor.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medidor-index',
  templateUrl: './medidor-index.component.html',
  styleUrls: ['./medidor-index.component.css']
})
export class MedidorIndexComponent implements OnInit {
  
  medidores: any = [];
  index: number = null;
  idmedidor: number = null;
  closeResult: string;
  search = '';

  constructor(protected medidorService: MedidorService,
              protected modalService: NgbModal,
              protected router: Router) {}

  ngOnInit() {
    this.medidorService.index().subscribe(res => {
      this.medidores = res;
    });
  }

  destroy(index, id) {
    this.medidorService.destroy(id)
      .subscribe(res => {
        this.medidores.splice(index, 1);
      });
  }

  edit(id) {
    this.router.navigate(['component/medidores/editar/' + id]);
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

