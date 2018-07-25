import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../material.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-material-index',
  templateUrl: './material-index.component.html',
  styleUrls: ['./material-index.component.css']
})
export class MaterialIndexComponent implements OnInit {
  materiales: any = [];
  index: number = null;
  idmaterial: number = null;
  closeResult: string;
  search = '';
  constructor(protected materialService: MaterialService,
              protected modalService: NgbModal,
              protected router: Router) { }

  ngOnInit() {
    this.materialService.index().subscribe(res => {
      this.materiales = res;
    });
  } 
  destroy(index, id) {
    this.materialService.destroy(id)
      .subscribe(res => {
        this.materiales.splice(index, 1);
      });
  }
  edit(id) {
    this.router.navigate(['component/materiales/editar/' + id]);
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
    this.idmaterial = id;
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
