import { Routes}from '@angular/router';
import { ProveedorComponent}from "./proveedor/proveedor.component";
import { ProveedorCreateComponent}from "./proveedor/proveedor-create/proveedor-create.component";
import { ProveedorIndexComponent}from "./proveedor/proveedor-index/proveedor-index.component";
import { ProveedorEditComponent}from "./proveedor/proveedor-edit/proveedor-edit.component";
import { MaterialComponent}from "./material/material.component";
import { MaterialIndexComponent } from "./material/material-index/material-index.component";
import { MaterialCreateComponent } from "./material/material-create/material-create.component";
import { MaterialEditComponent } from "./material/material-edit/material-edit.component";
import { FacturacompraComponent } from './facturacompra/facturacompra.component';
import { FacturacompraIndexComponent } from './facturacompra/facturacompra-index/facturacompra-index.component';
import { FacturacompraCrearComponent } from './facturacompra/facturacompra-crear/facturacompra-crear.component';
import { FacturacompraEditComponent } from './facturacompra/facturacompra-edit/facturacompra-edit.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteIndexComponent } from './cliente/cliente-index/cliente-index.component';
import { ClienteCreateComponent } from './cliente/cliente-create/cliente-create.component';
import { ClienteEditComponent } from './cliente/cliente-edit/cliente-edit.component';
import { FacturaComponent } from './factura/factura.component';
import { FacturaIndexComponent } from './factura/factura-index/factura-index.component';
import { FacturaEditComponent } from './factura/factura-edit/factura-edit.component';
import { FacturaCreateComponent } from './factura/factura-create/factura-create.component';
import { LecturaComponent } from './lectura/lectura.component';
import { LecturaIndexComponent } from './lectura/lectura-index/lectura-index.component';
import { LecturaCreateComponent } from './lectura/lectura-create/lectura-create.component';
import { LecturaEditComponent } from './lectura/lectura-edit/lectura-edit.component';
import { MedidorComponent } from './medidor/medidor.component';
import { MedidorIndexComponent } from './medidor/medidor-index/medidor-index.component';
import { MedidorCreateComponent } from './medidor/medidor-create/medidor-create.component';
import { MedidorEditComponent } from './medidor/medidor-edit/medidor-edit.component';
import { MultaComponent } from './multa/multa.component';
import { MultaIndexComponent } from './multa/multa-index/multa-index.component';
import { MultaCreateComponent } from './multa/multa-create/multa-create.component';
import { MultaEditComponent } from './multa/multa-edit/multa-edit.component';
import { PagoComponent } from './pago/pago.component';
import { PagoIndexComponent } from './pago/pago-index/pago-index.component';
import { PagoCreateComponent } from './pago/pago-create/pago-create.component';
import { PagoEditComponent } from './pago/pago-edit/pago-edit.component';
import { ParametroComponent } from './parametro/parametro.component';
import { ParametroIndexComponent } from './parametro/parametro-index/parametro-index.component';
import { ParametroCreateComponent } from './parametro/parametro-create/parametro-create.component';
import { ParametroEditComponent } from './parametro/parametro-edit/parametro-edit.component';
import { ServicioComponent } from './servicio/servicio.component';
import { ServicioIndexComponent } from './servicio/servicio-index/servicio-index.component';
import { ServicioCreateComponent } from './servicio/servicio-create/servicio-create.component';
import { ServicioEditComponent } from './servicio/servicio-edit/servicio-edit.component';
import { TipousuarioComponent } from './tipousuario/tipousuario.component';
import { TipousuarioIndexComponent } from './tipousuario/tipousuario-index/tipousuario-index.component';
import { TipousuarioCreateComponent } from './tipousuario/tipousuario-create/tipousuario-create.component';
import { TipousuarioEditComponent } from './tipousuario/tipousuario-edit/tipousuario-edit.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioIndexComponent } from './usuario/usuario-index/usuario-index.component';
import { UsuarioCreateComponent } from './usuario/usuario-create/usuario-create.component';
import { UsuarioEditComponent } from './usuario/usuario-edit/usuario-edit.component';
import { PrivilegioComponent } from './privilegio/privilegio.component';
import { PrivilegioIndexComponent } from './privilegio/privilegio-index/privilegio-index.component';
import { PrivilegioCreateComponent } from './privilegio/privilegio-create/privilegio-create.component';
import { PrivilegioEditComponent } from './privilegio/privilegio-edit/privilegio-edit.component';

export const ComponentsRoutes: Routes = [{
  path: '',
  children: [{
      path: 'proveedores',
      component: ProveedorComponent,
      children: [{
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      }, {
        path: 'listar',
        component: ProveedorIndexComponent,
        data: {
          title: 'Lista Proveedores',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'NUEVO REGISTRO',
            url: '/component/proveedores/crear'
          }, {
            title: 'proveedores'
          }]
        }
      }, {
        path: 'crear',
        component: ProveedorCreateComponent,
        data: {
          title: 'Registrar Proveedor',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'Proveedores',
            url: '/component/proveedores/listar'
          }, {
            title: 'NUEVO REGISTRO'
          }]
        }
      }, {
        path: 'editar/:id',
        component: ProveedorEditComponent,
        data: {
          title: 'Editar Proveedor',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'Proveedores',
            url: '/component/proveedores/listar'
          }, {
            title: 'MODIFICACIÓN'
          }]
        }
      }]
    }, {
      path: 'materiales',
      component: MaterialComponent,
      children: [{
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      }, {
        path: 'listar',
        component: MaterialIndexComponent,
        data: {
          title: 'Lista Materiales',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'NUEVO REGISTRO',
            url: '/component/materiales/crear'
          }, {
            title: 'materiales'
          }]
        }
      }, {
        path: 'crear',
        component: MaterialCreateComponent,
        data: {
          title: 'Registrar Materiale',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'materiales',
            url: '/component/materiales/listar'
          }, {
            title: 'NUEVO REGISTRO'
          }]
        }
      }, {
        path: 'editar/:id',
        component: MaterialEditComponent,
        data: {
          title: 'Editar Materiale',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'materiales',
            url: '/component/materiales/listar'
          }, {
            title: 'MODIFICACIÓN'
          }]
        }
      }]
    }, {
      path: 'facturacompras',
      component: FacturacompraComponent,
      children: [{
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      }, {
        path: 'listar',
        component: FacturacompraIndexComponent,
        data: {
          title: 'Listar facturas de compra',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'NUEVO REGISTRO',
            url: '/component/facturacompras/crear'
          }, {
            title: 'facturacompras'
          }]
        }
      }, {
        path: 'crear',
        component: FacturacompraCrearComponent,
        data: {
          title: 'Registrar factura compra',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'facturacompras',
            url: '/component/facturacompras/listar'
          }, {
            title: 'NUEVO REGISTRO'
          }]
        }
      }, {
        path: 'editar/:id',
        component: FacturacompraEditComponent,
        data: {
          title: 'Editar factura compra',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'facturacompras',
            url: '/component/facturacompras/listar'
          }, {
            title: 'MODIFICACIÓN'
          }]
        }
      }]
    }, 
    
    
    {
      path: 'clientes',
      component: ClienteComponent,
      children: [{
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      }, {
        path: 'listar',
        component: ClienteIndexComponent,
        data: {
          title: 'LISTA CLIENTES',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'NUEVO REGISTRO',
            url: '/component/clientes/crear'
          }, {
            title: 'CLIENTES'
          }]
        }
      }, {
        path: 'crear',
        component: ClienteCreateComponent,
        data: {
          title: 'CREAR CLIENTE',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'LISTADO',
            url: '/component/clientes/listar'
          }, {
            title: 'NUEVO REGISTRO'
          }]
        }
      }, {
        path: 'editar/:id',
        component: ClienteEditComponent,
        data: {
          title: 'EDITAR CLIENTE',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'LISTADO',
            url: '/component/clientes/listar'
          }, {
            title: 'MODIFICACIÓN'
          }]
        }
      }]
    }, {
      path: 'facturas',
      component: FacturaComponent,
      children: [{
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      }, {
        path: 'listar',
        component: FacturaIndexComponent,
        data: {
          title: 'LISTADO FACTURAS EMITIDAS',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'NUEVO REGISTRO',
            url: '/component/facturas/crear'
          }, {
            title: 'FACTURAS'
          }]
        }
      }, {
        path: 'crear',
        component: FacturaCreateComponent,
        data: {
          title: 'EMISIÓN DE FACTURAS',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'LISTADO',
            url: '/component/facturas/listar'
          }, {
            title: 'NUEVO REGISTRO'
          }]
        }
      }, {
        path: 'editar/:id',
        component: FacturaEditComponent,
        data: {
          title: 'EDITAR FACTURAS',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'LISTADO',
            url: '/component/facturas/listar'
          }, {
            title: 'MODIFICACIÓN'
          }]
        }
      }]
    }, {
      path: 'lecturas',
      component: LecturaComponent,
      children: [{
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      }, {
        path: 'listar',
        component: LecturaIndexComponent,
        data: {
          title: 'LISTADO LECTURAS',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'NUEVO REGISTRO',
            url: '/component/lecturas/crear'
          }, {
            title: 'LECTURAS'
          }]
        }
      }, {
        path: 'crear',
        component: LecturaCreateComponent,
        data: {
          title: 'INGRESO lECTURA',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'LISTADO',
            url: '/component/lecturas/listar'
          }, {
            title: 'NUEVO REGISTRO'
          }]
        }
      }, {
        path: 'editar/:id',
        component: LecturaEditComponent,
        data: {
          title: 'EDITAR LECTURAS',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'LISTADO',
            url: '/component/lecturas/listar'
          }, {
            title: 'MODIFICACIÓN'
          }]
        }
      }]
    }, {
      path: 'medidores',
      component: MedidorComponent,
      children: [{
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      }, {
        path: 'listar',
        component: MedidorIndexComponent,
        data: {
          title: 'LISTADO MEDIDORES',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'NUEVO REGISTRO',
            url: '/component/medidores/crear'
          }, {
            title: 'MEDIDOR'
          }]
        }
      }, {
        path: 'crear',
        component: MedidorCreateComponent,
        data: {
          title: 'CREAR MEDIDORES',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'LISTADO',
            url: '/component/medidores/listar'
          }, {
            title: 'NUEVO REGISTRO'
          }]
        }
      }, {
        path: 'editar/:id',
        component: MedidorEditComponent,
        data: {
          title: 'EDITAR MEDIDORE',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'LISTADO',
            url: '/component/medidores/listar'
          }, {
            title: 'MODIFICACIÓN'
          }]
        }
      }]
    }, {
      path: 'multas',
      component: MultaComponent,
      children: [{
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      }, {
        path: 'listar',
        component: MultaIndexComponent,
        data: {
          title: 'LISTA MULTAS',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'NUEVO REGISTRO',
            url: '/component/multas/crear'
          }, {
            title: 'MULTA'
          }]
        }
      }, {
        path: 'crear',
        component: MultaCreateComponent,
        data: {
          title: 'REGISTRO MULTA',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'LISTADO',
            url: '/component/multas/listar'
          }, {
            title: 'NUEVO REGISTRO'
          }]
        }
      }, {
        path: 'editar/:id',
        component: MultaEditComponent,
        data: {
          title: 'EDITAR MULTA',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'LISTADO',
            url: '/component/multas/listar'
          }, {
            title: 'MODIFICACIÓN'
          }]
        }
      }]
    }, {
      path: 'pagos',
      component: PagoComponent,
      children: [{
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      }, {
        path: 'listar',
        component: PagoIndexComponent,
        data: {
          title: 'LISTA PAGO SERVICIO',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'NUEVO REGISTRO',
            url: '/component/pagos/crear'
          }, {
            title: 'PAGO INSTALACIÓN'
          }]
        }
      }, {
        path: 'crear',
        component: PagoCreateComponent,
        data: {
          title: 'CANCELACIÓN SERVICIO',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'LISTADO',
            url: '/component/pagos/listar'
          }, {
            title: 'NUEVO REGISTRO'
          }]
        }
      }, {
        path: 'editar/:id',
        component: PagoEditComponent,
        data: {
          title: 'Editar pago',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'pagos',
            url: '/component/pagos/listar'
          }, {
            title: 'MODIFICACIÓN'
          }]
        }
      }]
    }, {
      path: 'parametros',
      component: ParametroComponent,
      children: [{
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      }, {
        path: 'listar',
        component: ParametroIndexComponent,
        data: {
          title: 'LISTA PARAMETROS',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'NUEVO REGISTRO',
            url: '/component/parametros/crear'
          }, {
            title: 'PARAMETROS'
          }]
        }
      }, {
        path: 'crear',
        component: ParametroCreateComponent,
        data: {
          title: 'INGRESO DE PARAMETROS',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'LISTADO',
            url: '/component/parametros/listar'
          }, {
            title: 'NUEVO REGISTRO'
          }]
        }
      }, {
        path: 'editar/:id',
        component: ParametroEditComponent,
        data: {
          title: 'EDITAR PARAMETROS',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'LISTADO',
            url: '/component/parametros/listar'
          }, {
            title: 'MODIFICACIÓN'
          }]
        }
      }]
    }, {
      path: 'servicios',
      component: ServicioComponent,
      children: [{
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      }, {
        path: 'listar',
        component: ServicioIndexComponent,
        data: {
          title: 'LISTADO SERVICIOS',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'NUEVO REGISTRO',
            url: '/component/servicios/crear'
          }, {
            title: 'SERVICIOS'
          }]
        }
      }, {
        path: 'crear',
        component: ServicioCreateComponent,
        data: {
          title: 'HABILITAR SERVICIOS',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'LISTADO',
            url: '/component/servicios/listar'
          }, {
            title: 'NUEVO REGISTRO'
          }]
        }
      }, {
        path: 'editar/:id',
        component: ServicioEditComponent,
        data: {
          title: 'EDITAR SERVICIOS',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'LISTADO',
            url: '/component/servicios/listar'
          }, {
            title: 'MODIFICACIÓN'
          }]
        }
      }]
    }, {
      path: 'tipousuarios',
      component: TipousuarioComponent,
      children: [{
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      }, {
        path: 'listar',
        component: TipousuarioIndexComponent,
        data: {
          title: 'LISTA DE CARGOS',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'NUEVO REGISTRO',
            url: '/component/tipousuarios/crear'
          }, {
            title: 'CARGO USUARIO'
          }]
        }
      }, {
        path: 'crear',
        component: TipousuarioCreateComponent,
        data: {
          title: 'CREAR CARGO',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'LISTADO',
            url: '/component/tipousuarios/listar'
          }, {
            title: 'NUEVO REGISTRO'
          }]
        }
      }, {
        path: 'editar/:id',
        component: TipousuarioEditComponent,
        data: {
          title: 'EDITAR CARGO',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'LISTADO',
            url: '/component/tipousuarios/listar'
          }, {
            title: 'MODIFICACIÓN'
          }]
        }
      }]
    }, {
      path: 'usuarios',
      component: UsuarioComponent,
      children: [{
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      }, {
        path: 'listar',
        component: UsuarioIndexComponent,
        data: {
          title: 'LISTA USUARIOS',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'NUEVO REGISTRO',
            url: '/component/usuarios/crear'
          }, {
            title: 'USUARIOS'
          }]
        }
      }, {
        path: 'crear',
        component: UsuarioCreateComponent,
        data: {
          title: 'CREAR USUARIO',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'LISTADO',
            url: '/component/usuarios/listar'
          }, {
            title: 'NUEVO REGISTRO'
          }]
        }
      }, {
        path: 'editar/:id',
        component: UsuarioEditComponent,
        data: {
          title: 'EDITAR USUARIOS',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'LISTADO',
            url: '/component/usuarios/listar'
          }, {
            title: 'MODIFICACIÓN'
          }]
        }
      }]
    },
    {
      path: 'privilegios',
      component: PrivilegioComponent,
      children: [{
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      }, {
        path: 'listar',
        component: PrivilegioIndexComponent,
        data: {
          title: 'LISTADO PRIVILEGIOS',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'NUEVO REGISTRO',
            url: '/component/privilegios/crear'
          }, {
            title: 'PRIVILEGIOS'
          }]
        }
      }, {
        path: 'crear',
        component: PrivilegioCreateComponent,
        data: {
          title: 'CREAR PRIVILEGIO',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'LISTADO',
            url: '/component/privilegios/listar'
          }, {
            title: 'NUEVO REGISTRO'
          }]
        }
      }, {
        path: 'editar/:id',
        component: PrivilegioEditComponent,
        data: {
          title: 'EDITAR PRIVILEGIO',
          urls: [{
            title: 'INICIO',
            url: '/dashboard'
          }, {
            title: 'LISTADO',
            url: '/component/privilegios/listar'
          }, {
            title: 'MODIFICACIÓN'
          }]
        }
      }]
    }
  ]
}];