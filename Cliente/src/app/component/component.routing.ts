import {
  Routes
}
from '@angular/router';
import {
  ProveedorComponent
}
from "./proveedor/proveedor.component";
import {
  ProveedorCreateComponent
}
from "./proveedor/proveedor-create/proveedor-create.component";
import {
  ProveedorIndexComponent
}
from "./proveedor/proveedor-index/proveedor-index.component";
import {
  ProveedorEditComponent
}
from "./proveedor/proveedor-edit/proveedor-edit.component";
import {
  MaterialComponent
}
from "./material/material.component";
import {
  MaterialIndexComponent
}
from "./material/material-index/material-index.component";
import {
  MaterialCreateComponent
}
from "./material/material-create/material-create.component";
import {
  MaterialEditComponent
}
from "./material/material-edit/material-edit.component";
import {
  FacturacompraComponent
}
from './facturacompra/facturacompra.component';
import {
  FacturacompraIndexComponent
}
from './facturacompra/facturacompra-index/facturacompra-index.component';
import {
  FacturacompraCrearComponent
}
from './facturacompra/facturacompra-crear/facturacompra-crear.component';
import {
  FacturacompraEditComponent
}
from './facturacompra/facturacompra-edit/facturacompra-edit.component';
import {
  ClienteComponent
}
from './cliente/cliente.component';
import {
  ClienteIndexComponent
}
from './cliente/cliente-index/cliente-index.component';
import {
  ClienteCreateComponent
}
from './cliente/cliente-create/cliente-create.component';
import {
  ClienteEditComponent
}
from './cliente/cliente-edit/cliente-edit.component';
import {
  FacturaComponent
}
from './factura/factura.component';
import {
  FacturaIndexComponent
}
from './factura/factura-index/factura-index.component';
import {
  FacturaEditComponent
}
from './factura/factura-edit/factura-edit.component';
import {
  FacturaCreateComponent
}
from './factura/factura-create/factura-create.component';
import {
  LecturaComponent
}
from './lectura/lectura.component';
import {
  LecturaIndexComponent
}
from './lectura/lectura-index/lectura-index.component';
import {
  LecturaCreateComponent
}
from './lectura/lectura-create/lectura-create.component';
import {
  LecturaEditComponent
}
from './lectura/lectura-edit/lectura-edit.component';
import {
  MedidorComponent
}
from './medidor/medidor.component';
import {
  MedidorIndexComponent
}
from './medidor/medidor-index/medidor-index.component';
import {
  MedidorCreateComponent
}
from './medidor/medidor-create/medidor-create.component';
import {
  MedidorEditComponent
}
from './medidor/medidor-edit/medidor-edit.component';
import {
  MultaComponent
}
from './multa/multa.component';
import {
  MultaIndexComponent
}
from './multa/multa-index/multa-index.component';
import {
  MultaCreateComponent
}
from './multa/multa-create/multa-create.component';
import {
  MultaEditComponent
}
from './multa/multa-edit/multa-edit.component';
import {
  PagoComponent
}
from './pago/pago.component';
import {
  PagoIndexComponent
}
from './pago/pago-index/pago-index.component';
import {
  PagoCreateComponent
}
from './pago/pago-create/pago-create.component';
import {
  PagoEditComponent
}
from './pago/pago-edit/pago-edit.component';
import {
  ParametroComponent
}
from './parametro/parametro.component';
import {
  ParametroIndexComponent
}
from './parametro/parametro-index/parametro-index.component';
import {
  ParametroCreateComponent
}
from './parametro/parametro-create/parametro-create.component';
import {
  ParametroEditComponent
}
from './parametro/parametro-edit/parametro-edit.component';
import {
  ServicioComponent
}
from './servicio/servicio.component';
import {
  ServicioIndexComponent
}
from './servicio/servicio-index/servicio-index.component';
import {
  ServicioCreateComponent
}
from './servicio/servicio-create/servicio-create.component';
import {
  ServicioEditComponent
}
from './servicio/servicio-edit/servicio-edit.component';
import {
  TipousuarioComponent
}
from './tipousuario/tipousuario.component';
import {
  TipousuarioIndexComponent
}
from './tipousuario/tipousuario-index/tipousuario-index.component';
import {
  TipousuarioCreateComponent
}
from './tipousuario/tipousuario-create/tipousuario-create.component';
import {
  TipousuarioEditComponent
}
from './tipousuario/tipousuario-edit/tipousuario-edit.component';
import {
  UsuarioComponent
}
from './usuario/usuario.component';
import {
  UsuarioIndexComponent
}
from './usuario/usuario-index/usuario-index.component';
import {
  UsuarioCreateComponent
}
from './usuario/usuario-create/usuario-create.component';
import {
  UsuarioEditComponent
}
from './usuario/usuario-edit/usuario-edit.component';
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
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'registro',
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
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'Proveedores',
            url: '/component/proveedores/listar'
          }, {
            title: 'registro'
          }]
        }
      }, {
        path: 'editar/:id',
        component: ProveedorEditComponent,
        data: {
          title: 'Editar Proveedor',
          urls: [{
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'Proveedores',
            url: '/component/proveedores/listar'
          }, {
            title: 'edición'
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
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'registro',
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
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'materiales',
            url: '/component/materiales/listar'
          }, {
            title: 'registro'
          }]
        }
      }, {
        path: 'editar/:id',
        component: MaterialEditComponent,
        data: {
          title: 'Editar Materiale',
          urls: [{
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'materiales',
            url: '/component/materiales/listar'
          }, {
            title: 'edición'
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
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'registro',
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
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'facturacompras',
            url: '/component/facturacompras/listar'
          }, {
            title: 'registro'
          }]
        }
      }, {
        path: 'editar/:id',
        component: FacturacompraEditComponent,
        data: {
          title: 'Editar factura compra',
          urls: [{
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'facturacompras',
            url: '/component/facturacompras/listar'
          }, {
            title: 'edición'
          }]
        }
      }]
    }, {
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
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'registro',
            url: '/component/clientes/crear'
          }, {
            title: 'clientes'
          }]
        }
      }, {
        path: 'crear',
        component: ClienteCreateComponent,
        data: {
          title: 'CREAR CLIENTE',
          urls: [{
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'clientes',
            url: '/component/clientes/listar'
          }, {
            title: 'registro'
          }]
        }
      }, {
        path: 'editar/:id',
        component: ClienteEditComponent,
        data: {
          title: 'EDITAR CLIENTE',
          urls: [{
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'clientes',
            url: '/component/clientes/listar'
          }, {
            title: 'edición'
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
          title: 'LISTADO FACTURAS DEL SERVICIO',
          urls: [{
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'registro',
            url: '/component/facturas/crear'
          }, {
            title: 'facturas'
          }]
        }
      }, {
        path: 'crear',
        component: FacturaCreateComponent,
        data: {
          title: 'EMISIÓN DE FACTURAS',
          urls: [{
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'facturas',
            url: '/component/facturas/listar'
          }, {
            title: 'registro'
          }]
        }
      }, {
        path: 'editar/:id',
        component: FacturaEditComponent,
        data: {
          title: 'EDITAR FACTURAS',
          urls: [{
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'facturas',
            url: '/component/facturas/listar'
          }, {
            title: 'edición'
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
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'registro',
            url: '/component/lecturas/crear'
          }, {
            title: 'lecturas'
          }]
        }
      }, {
        path: 'crear',
        component: LecturaCreateComponent,
        data: {
          title: 'INGRESO lECTURA',
          urls: [{
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'lecturas',
            url: '/component/lecturas/listar'
          }, {
            title: 'registro'
          }]
        }
      }, {
        path: 'editar/:id',
        component: LecturaEditComponent,
        data: {
          title: 'EDITAR LECTURAS',
          urls: [{
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'lecturas',
            url: '/component/lecturas/listar'
          }, {
            title: 'edición'
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
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'registro',
            url: '/component/medidores/crear'
          }, {
            title: 'medidores'
          }]
        }
      }, {
        path: 'crear',
        component: MedidorCreateComponent,
        data: {
          title: 'CREAR MEDIDORES',
          urls: [{
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'medidores',
            url: '/component/medidores/listar'
          }, {
            title: 'registro'
          }]
        }
      }, {
        path: 'editar/:id',
        component: MedidorEditComponent,
        data: {
          title: 'EDITAR MEDIDORES',
          urls: [{
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'medidores',
            url: '/component/medidores/listar'
          }, {
            title: 'edición'
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
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'registro',
            url: '/component/multas/crear'
          }, {
            title: 'multas'
          }]
        }
      }, {
        path: 'crear',
        component: MultaCreateComponent,
        data: {
          title: 'REGISTRO MULTA',
          urls: [{
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'multas',
            url: '/component/multas/listar'
          }, {
            title: 'registro'
          }]
        }
      }, {
        path: 'editar/:id',
        component: MultaEditComponent,
        data: {
          title: 'Editar medidore',
          urls: [{
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'multas',
            url: '/component/multas/listar'
          }, {
            title: 'edición'
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
          title: 'Lista pagos',
          urls: [{
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'registro',
            url: '/component/pagos/crear'
          }, {
            title: 'pagos'
          }]
        }
      }, {
        path: 'crear',
        component: PagoCreateComponent,
        data: {
          title: 'Cancelación servicio',
          urls: [{
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'pagos',
            url: '/component/pagos/listar'
          }, {
            title: 'registro'
          }]
        }
      }, {
        path: 'editar/:id',
        component: PagoEditComponent,
        data: {
          title: 'Editar pago',
          urls: [{
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'pagos',
            url: '/component/pagos/listar'
          }, {
            title: 'edición'
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
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'registro',
            url: '/component/parametros/crear'
          }, {
            title: 'parametros'
          }]
        }
      }, {
        path: 'crear',
        component: ParametroCreateComponent,
        data: {
          title: 'INGRESO DE PARAMETROS',
          urls: [{
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'parametros',
            url: '/component/parametros/listar'
          }, {
            title: 'registro'
          }]
        }
      }, {
        path: 'editar/:id',
        component: ParametroEditComponent,
        data: {
          title: 'EDITAR PARAMETROS',
          urls: [{
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'parametros',
            url: '/component/parametros/listar'
          }, {
            title: 'edición'
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
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'registro',
            url: '/component/servicios/crear'
          }, {
            title: 'servicios'
          }]
        }
      }, {
        path: 'crear',
        component: ServicioCreateComponent,
        data: {
          title: 'HABILITAR SERVICIOS',
          urls: [{
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'servicios',
            url: '/component/servicios/listar'
          }, {
            title: 'registro'
          }]
        }
      }, {
        path: 'editar/:id',
        component: ServicioEditComponent,
        data: {
          title: 'EDITAR SERVICIOS',
          urls: [{
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'servicios',
            url: '/component/servicios/listar'
          }, {
            title: 'edición'
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
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'registro',
            url: '/component/tipousuarios/crear'
          }, {
            title: 'tipousuarios'
          }]
        }
      }, {
        path: 'crear',
        component: TipousuarioCreateComponent,
        data: {
          title: 'CREAR CARGO',
          urls: [{
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'tipousuarios',
            url: '/component/tipousuarios/listar'
          }, {
            title: 'registro'
          }]
        }
      }, {
        path: 'editar/:id',
        component: TipousuarioEditComponent,
        data: {
          title: 'EDITAR CARGO',
          urls: [{
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'tipousuarios',
            url: '/component/tipousuarios/listar'
          }, {
            title: 'edición'
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
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'registro',
            url: '/component/usuarios/crear'
          }, {
            title: 'usuarios'
          }]
        }
      }, {
        path: 'crear',
        component: UsuarioCreateComponent,
        data: {
          title: 'CREAR USUARIO',
          urls: [{
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'usuarios',
            url: '/component/usuarios/listar'
          }, {
            title: 'registro'
          }]
        }
      }, {
        path: 'editar/:id',
        component: UsuarioEditComponent,
        data: {
          title: 'EDITAR USUARIOS',
          urls: [{
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'usuarios',
            url: '/component/usuarios/listar'
          }, {
            title: 'edición'
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
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'registro',
            url: '/component/privilegios/crear'
          }, {
            title: 'privilegios'
          }]
        }
      }, {
        path: 'crear',
        component: PrivilegioCreateComponent,
        data: {
          title: 'CREAR PRIVILEGIO',
          urls: [{
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'privilegio',
            url: '/component/privilegios/listar'
          }, {
            title: 'registro'
          }]
        }
      }, {
        path: 'editar/:id',
        component: PrivilegioEditComponent,
        data: {
          title: 'EDITAR PRIVILEGIO',
          urls: [{
            title: 'Inicio',
            url: '/dashboard'
          }, {
            title: 'privilegios',
            url: '/component/privilegios/listar'
          }, {
            title: 'edición'
          }]
        }
      }]
    }
  ]
}];