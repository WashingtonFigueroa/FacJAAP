import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/Http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes } from './component.routing';
import { NgbdpregressbarBasic } from './progressbar/progressbar.component';
import { NgbdpaginationBasic } from './pagination/pagination.component';
import { NgbdAccordionBasic } from './accordion/accordion.component';
import { NgbdAlertBasic } from './alert/alert.component';
import { NgbdCarouselBasic } from './carousel/carousel.component';
import { NgbdDatepickerBasic } from './datepicker/datepicker.component';
import { NgbdDropdownBasic } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdModalBasic } from './modal/modal.component';
import { NgbdPopTooltip } from './popover-tooltip/popover-tooltip.component';
import { NgbdratingBasic } from './rating/rating.component';
import { NgbdtabsBasic } from './tabs/tabs.component';
import { NgbdtimepickerBasic } from './timepicker/timepicker.component';
import { NgbdtypeheadBasic } from './typehead/typehead.component';
import { CardsComponent } from './card/card.component';
import { ButtonsComponent } from './buttons/buttons.component';
import {ProveedorComponent} from "./proveedor/proveedor.component";
import {ProveedorIndexComponent} from "./proveedor/proveedor-index/proveedor-index.component";
import {ProveedorEditComponent} from "./proveedor/proveedor-edit/proveedor-edit.component";
import {ProveedorCreateComponent} from "./proveedor/proveedor-create/proveedor-create.component";
import {ProveedorService} from "./proveedor/proveedor.service";
import { MaterialComponent } from './material/material.component';
import { MaterialIndexComponent } from './material/material-index/material-index.component';
import { MaterialEditComponent } from './material/material-edit/material-edit.component';
import { MaterialCreateComponent } from './material/material-create/material-create.component';
import {MaterialService} from "./material/material.service";

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule
  ],
  declarations: [
    NgbdpregressbarBasic,
    NgbdpaginationBasic,
    NgbdAccordionBasic,
    NgbdAlertBasic,
    NgbdCarouselBasic,
    NgbdDatepickerBasic,
    NgbdDropdownBasic,
    NgbdModalBasic,
    NgbdPopTooltip,
    NgbdratingBasic,
    NgbdtabsBasic,
    NgbdtimepickerBasic,
    NgbdtypeheadBasic,
    CardsComponent,
    ButtonsComponent,
    ProveedorComponent,
    ProveedorIndexComponent,
    ProveedorEditComponent,
    ProveedorCreateComponent,
    MaterialComponent,
    MaterialIndexComponent,
    MaterialEditComponent,
    MaterialCreateComponent
  ],
  providers: [
      ProveedorService,
      MaterialService
  ]

})

export class ComponentsModule {}