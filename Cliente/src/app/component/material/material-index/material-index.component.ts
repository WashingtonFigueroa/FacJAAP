import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../material.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment.prod';

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

  pages: any = [];
  prev_page: any = null;
  next_page: any = null; 
  environment = environment;

  constructor(protected materialService: MaterialService,
              protected modalService: NgbModal,
              protected router: Router) { }

  ngOnInit() {
    this.materialService.index().subscribe((res: any) => {
      this.materiales = res.data;
      this.getPages(res.last_page);
      this.prev_page = res.prev_page_url;
      this.next_page = res.next_page_url;
    });
  }

  getPages(last_page) {
    for (let i=1; i<=last_page; i++ ) {
      this.pages.push(
          {
              url: this.environment.base + 'materiales?page=' + i ,
              item: i
          }
      );
    }
  }
  loadPagination(url) {
    this.materialService.indexPerPage(url)
        .subscribe((res: any)=> {
          this.materiales = res.data;
          this.prev_page = res.prev_page_url;
          this.next_page = res.next_page_url;
        });
  }
  prevPage() {
    this.materialService.indexPerPage(this.prev_page)
        .subscribe( (res : any)=> {
          this.materiales = res.data;
          this.prev_page = res.prev_page_url;
          this.next_page = res.next_page_url;
        });
  }
  nextPage() {
      this.materialService.indexPerPage(this.next_page)
          .subscribe( (res : any)=> {
              this.materiales = res.data;
              this.prev_page = res.prev_page_url;
              this.next_page = res.next_page_url;
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
