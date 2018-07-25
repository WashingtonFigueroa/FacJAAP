import { Component, OnInit } from '@angular/core';
import {ProveedorService} from "../proveedor.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";

@Component({
  selector: 'app-proveedor-index',
  templateUrl: './proveedor-index.component.html',
  styleUrls: ['./proveedor-index.component.css']
})
export class ProveedorIndexComponent implements OnInit {
    proveedores: any = [];
    index: number = null;
    idproveedor: number = null;
    closeResult: string;
    search = '';
    constructor(protected proveedorService: ProveedorService,
                protected modalService: NgbModal,
                protected router: Router) { }

    ngOnInit() {
        this.proveedorService.index().subscribe(res => {
            this.proveedores = res;
        });
    }

    confirm(index, id, confirmModal) {
        this.index = index;
        this.idproveedor= id;
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

    destroy(index, id) {
        this.proveedorService.destroy(id)
            .subscribe(res => {
                this.proveedores.splice(index, 1);
            });
    }
    edit(id) {
        this.router.navigate(['component/proveedores/editar/' + id]);
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }


}
