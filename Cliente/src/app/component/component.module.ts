import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/Http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes } from './component.routing';
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
import { OnlyNumberDirective } from './only-number.directive';
import { PrivilegioComponent } from './privilegio/privilegio.component';
import { PrivilegioIndexComponent } from './privilegio/privilegio-index/privilegio-index.component';
import { PrivilegioEditComponent } from './privilegio/privilegio-edit/privilegio-edit.component';
import { PrivilegioCreateComponent } from './privilegio/privilegio-create/privilegio-create.component';
import { PrivilegioService } from './privilegio/privilegio.service';
import {NgAutoCompleteModule} from "ng-auto-complete";
import { StadisticasComponent } from './stadisticas/stadisticas.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import {PlotlyModule} from "angular-plotly.js";
import { MaterialComponent } from './material/material.component';
import { MaterialIndexComponent } from './material/material-index/material-index.component';
import { MaterialEditComponent } from './material/material-edit/material-edit.component';
import { MaterialCreateComponent } from './material/material-create/material-create.component';
import { InventarioComponent } from './inventario/inventario.component';
import { InventarioIndexComponent } from './inventario/inventario-index/inventario-index.component';
import { InventarioEditComponent } from './inventario/inventario-edit/inventario-edit.component';
import { InventarioCreateComponent } from './inventario/inventario-create/inventario-create.component';
import { MovimientoComponent } from './movimiento/movimiento.component';
import { MovimientoIndexComponent } from './movimiento/movimiento-index/movimiento-index.component';
import { MovimientoEditComponent } from './movimiento/movimiento-edit/movimiento-edit.component';
import { MovimientoCreateComponent } from './movimiento/movimiento-create/movimiento-create.component';
import { MaterialService } from './material/material.service';
import { InventarioService } from './inventario/inventario.service';
import { MovimientoService } from './movimiento/movimiento.service';
import {ToastrModule} from "ngx-toastr";

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule,
    NgAutoCompleteModule,
    PlotlyModule,
    ToastrModule.forRoot()
  ],
  declarations: [
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
    FacturaCreateComponent,
    OnlyNumberDirective,
    PrivilegioComponent,
    PrivilegioIndexComponent,
    PrivilegioEditComponent,
    PrivilegioCreateComponent,
    StadisticasComponent,
    EstadisticasComponent,
    MaterialComponent,
    MaterialIndexComponent,
    MaterialEditComponent,
    MaterialCreateComponent,
    InventarioComponent,
    InventarioIndexComponent,
    InventarioEditComponent,
    InventarioCreateComponent,
    MovimientoComponent,
    MovimientoIndexComponent,
    MovimientoEditComponent,
    MovimientoCreateComponent
  ],
  providers: [
      ClienteService,
      FacturaService,
      LecturaService,
      MedidorService,
      MultaService,
      PagoService,
      ParametroService,
      ServicioService,
      TipousuarioService,
      UsuarioService,
      PrivilegioService,
      MaterialService,
      InventarioService,
      MovimientoService
  ]

})

export class ComponentsModule {}