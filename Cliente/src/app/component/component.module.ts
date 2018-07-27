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
import { FacturacompraIndexComponent } from './facturacompra/facturacompra-index/facturacompra-index.component';
import { FacturacompraEditComponent } from './facturacompra/facturacompra-edit/facturacompra-edit.component';
import { FacturacompraCrearComponent } from './facturacompra/facturacompra-crear/facturacompra-crear.component';
import { FacturacompraService } from './facturacompra/facturacompra.service';
import { FacturacompraComponent } from './facturacompra/facturacompra.component';
import { TipousuarioComponent } from './tipousuario/tipousuario.component';
import { TipousuarioIndexComponent } from './tipousuario/tipousuario-index/tipousuario-index.component';
import { TipousuarioEditComponent } from './tipousuario/tipousuario-edit/tipousuario-edit.component';
import { TipousuarioCreateComponent } from './tipousuario/tipousuario-create/tipousuario-create.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioIndexComponent } from './usuario/usuario-index/usuario-index.component';
import { UsuarioEditComponent } from './usuario/usuario-edit/usuario-edit.component';
import { UsuarioCreateComponent } from './usuario/usuario-create/usuario-create.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteIndexComponent } from './cliente/cliente-index/cliente-index.component';
import { ClienteEditComponent } from './cliente/cliente-edit/cliente-edit.component';
import { ClienteCreateComponent } from './cliente/cliente-create/cliente-create.component';
import { MedidorComponent } from './medidor/medidor.component';
import { MedidorIndexComponent } from './medidor/medidor-index/medidor-index.component';
import { MedidorEditComponent } from './medidor/medidor-edit/medidor-edit.component';
import { MedidorCreateComponent } from './medidor/medidor-create/medidor-create.component';
import { ParametroComponent } from './parametro/parametro.component';
import { ParametroIndexComponent } from './parametro/parametro-index/parametro-index.component';
import { ParametroEditComponent } from './parametro/parametro-edit/parametro-edit.component';
import { ParametroCreateComponent } from './parametro/parametro-create/parametro-create.component';
import { ServicioComponent } from './servicio/servicio.component';
import { ServicioIndexComponent } from './servicio/servicio-index/servicio-index.component';
import { ServicioEditComponent } from './servicio/servicio-edit/servicio-edit.component';
import { ServicioCreateComponent } from './servicio/servicio-create/servicio-create.component';
import { PagoComponent } from './pago/pago.component';
import { PagoIndexComponent } from './pago/pago-index/pago-index.component';
import { PagoEditComponent } from './pago/pago-edit/pago-edit.component';
import { PagoCreateComponent } from './pago/pago-create/pago-create.component';
import { LecturaComponent } from './lectura/lectura.component';
import { LecturaIndexComponent } from './lectura/lectura-index/lectura-index.component';
import { LecturaEditComponent } from './lectura/lectura-edit/lectura-edit.component';
import { LecturaCreateComponent } from './lectura/lectura-create/lectura-create.component';
import { MultaComponent } from './multa/multa.component';
import { MultaIndexComponent } from './multa/multa-index/multa-index.component';
import { MultaEditComponent } from './multa/multa-edit/multa-edit.component';
import { MultaCreateComponent } from './multa/multa-create/multa-create.component';
import { FacturaComponent } from './factura/factura.component';
import { FacturaIndexComponent } from './factura/factura-index/factura-index.component';
import { FacturaEditComponent } from './factura/factura-edit/factura-edit.component';
import { FacturaCreateComponent } from './factura/factura-create/factura-create.component';
import { ClienteService } from './cliente/cliente.service';
import { FacturaService } from './factura/factura.service';
import { LecturaService } from './lectura/lectura.service';
import { MedidorService } from './medidor/medidor.service';
import { MultaService } from './multa/multa.service';
import { PagoService } from './pago/pago.service';
import { ParametroService } from './parametro/parametro.service';
import { ServicioService } from './servicio/servicio.service';
import { TipousuarioService } from './tipousuario/tipousuario.service';
import { UsuarioService } from './usuario/usuario.service';

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
    MaterialCreateComponent,
    FacturacompraComponent,
    FacturacompraIndexComponent,
    FacturacompraEditComponent,
    FacturacompraCrearComponent,
    TipousuarioComponent,
    TipousuarioIndexComponent,
    TipousuarioEditComponent,
    TipousuarioCreateComponent,
    UsuarioComponent,
    UsuarioIndexComponent,
    UsuarioEditComponent,
    UsuarioCreateComponent,
    ClienteComponent,
    ClienteIndexComponent,
    ClienteEditComponent,
    ClienteCreateComponent,
    MedidorComponent,
    MedidorIndexComponent,
    MedidorEditComponent,
    MedidorCreateComponent,
    ParametroComponent,
    ParametroIndexComponent,
    ParametroEditComponent,
    ParametroCreateComponent,
    ServicioComponent,
    ServicioIndexComponent,
    ServicioEditComponent,
    ServicioCreateComponent,
    PagoComponent,
    PagoIndexComponent,
    PagoEditComponent,
    PagoCreateComponent,
    LecturaComponent,
    LecturaIndexComponent,
    LecturaEditComponent,
    LecturaCreateComponent,
    MultaComponent,
    MultaIndexComponent,
    MultaEditComponent,
    MultaCreateComponent,
    FacturaComponent,
    FacturaIndexComponent,
    FacturaEditComponent,
    FacturaCreateComponent
  ],
  providers: [
      ProveedorService,
      MaterialService,
      FacturacompraService,
      ClienteService,
      FacturaService,
      LecturaService,
      MedidorService,
      MultaService,
      PagoService,
      ParametroService,
      ServicioService,
      TipousuarioService,
      UsuarioService
  ]

})

export class ComponentsModule {}