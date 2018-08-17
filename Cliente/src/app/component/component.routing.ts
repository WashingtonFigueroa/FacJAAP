import { Routes}from '@angular/router';
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
import {EstadisticasComponent} from "./estadisticas/estadisticas.component";
import { MaterialComponent } from './material/material.component';
import { MaterialIndexComponent } from './material/material-index/material-index.component';
import { MaterialCreateComponent } from './material/material-create/material-create.component';
import { MaterialEditComponent } from './material/material-edit/material-edit.component';
import { InventarioComponent } from './inventario/inventario.component';
import { InventarioIndexComponent } from './inventario/inventario-index/inventario-index.component';
import { InventarioCreateComponent } from './inventario/inventario-create/inventario-create.component';
import { InventarioEditComponent } from './inventario/inventario-edit/inventario-edit.component';
import { MovimientoComponent } from './movimiento/movimiento.component';
import { MovimientoIndexComponent } from './movimiento/movimiento-index/movimiento-index.component';
import { MovimientoCreateComponent } from './movimiento/movimiento-create/movimiento-create.component';
import { MovimientoEditComponent } from './movimiento/movimiento-edit/movimiento-edit.component';
import {AuthGuard} from "./auth.guard";

export const ComponentsRoutes: Routes = [{
    path: '',
    children: [
//rutas estadisticas
        { path: 'estadisticas',
            // canActivate: [AuthGuard],
            component: EstadisticasComponent,
            data: {
                title: 'ESTADÍSTICAS',
                urls: [{ title: 'INICIO', url: '/acceso/dashboard'},
                    { title: 'REPORTES' }] } },
//rutas clientes
        {
            path: 'clientes',
            canActivate: [AuthGuard],
            component: ClienteComponent,
            children: [{
                path: '',
                redirectTo: 'listar',
                pathMatch: 'full'      },
                { path: 'listar', component: ClienteIndexComponent, data: {
                        title: 'LISTA CLIENTES',
                        urls: [{ title: 'INICIO', url: '/acceso/dashboard' },
                            { title: 'NUEVO REGISTRO', url: '/acceso/component/clientes/crear'},
                            { title: 'CLIENTES' }]
                    }      },
                { path: 'crear', component: ClienteCreateComponent, data: {
                        title: 'CREAR CLIENTE',
                        urls: [{ title: 'INICIO', url: '/acceso/dashboard' },
                            { title: 'LISTADO', url: '/acceso/component/clientes/listar'},
                            { title: 'NUEVO REGISTRO' }]
                    }
                },
                { path: 'editar/:id', component: ClienteEditComponent, data: {
                        title: 'EDITAR CLIENTE',
                        urls: [{ title: 'INICIO', url: '/acceso/dashboard' },
                            { title: 'LISTADO', url: '/acceso/component/clientes/listar'},
                            { title: 'MODIFICACIÓN' }]
                    }
                }]
        },
//rutas materiales
        {
            path: 'materiales',
            canActivate: [AuthGuard],
            component: MaterialComponent,
            children: [{
                path: '',
                redirectTo: 'listar',
                pathMatch: 'full'      },
                { path: 'listar', component: MaterialIndexComponent, data: {
                        title: 'LISTA INVENTARIO',
                        urls: [{ title: 'INICIO', url: '/acceso/dashboard' },
                            { title: 'NUEVO REGISTRO', url: '/acceso/component/materiales/crear'},
                            { title: 'INVENTARIO' }]
                    }      },
                { path: 'crear', component: MaterialCreateComponent, data: {
                        title: 'CREAR MATERIAL',
                        urls: [{ title: 'INICIO', url: '/acceso/dashboard' },
                            { title: 'LISTADO', url: '/acceso/component/materiales/listar'},
                            { title: 'NUEVO REGISTRO' }]
                    }
                },
                { path: 'editar/:id', component: MaterialEditComponent, data: {
                        title: 'EDITAR MATERIAL',
                        urls: [{ title: 'INICIO', url: '/acceso/dashboard' },
                            { title: 'LISTADO', url: '/acceso/component/materiales/listar'},
                            { title: 'MODIFICACIÓN' }]
                    }
                }]
        },
//rutas INVENTARIO
        {
            path: 'inventarios',
            canActivate: [AuthGuard],
            component: InventarioComponent,
            children: [{
                path: '',
                redirectTo: 'listar',
                pathMatch: 'full'      },
                { path: 'listar', component: InventarioIndexComponent, data: {
                        title: 'LISTA KARDEX',
                        urls: [{ title: 'INICIO', url: '/acceso/dashboard' },
                            { title: 'NUEVO REGISTRO', url: '/acceso/component/inventarios/crear'},
                            { title: 'KARDEX' }]
                    }      },
                { path: 'crear', component: InventarioCreateComponent, data: {
                        title: 'MOVIMIENTO KARDEX',
                        urls: [{ title: 'INICIO', url: '/acceso/dashboard' },
                            { title: 'LISTADO', url: '/acceso/component/inventarios/listar'},
                            { title: 'NUEVO REGISTRO' }]
                    }
                },
                { path: 'editar/:id', component: InventarioEditComponent, data: {
                        title: 'EDITAR KARDEX',
                        urls: [{ title: 'INICIO', url: '/acceso/dashboard' },
                            { title: 'LISTADO', url: '/acceso/component/inventarios/listar'},
                            { title: 'MODIFICACIÓN' }]
                    }
                }]
        },
//rutas MOVIMIENTOS
        {
            path: 'movimientos',
            canActivate: [AuthGuard],
            component: MovimientoComponent,
            children: [{
                path: '',
                redirectTo: 'listar',
                pathMatch: 'full'      },
                { path: 'listar', component: MovimientoIndexComponent, data: {
                        title: 'LISTA MOVIMIENTOS',
                        urls: [{ title: 'INICIO', url: '/acceso/dashboard' },
                            { title: 'NUEVO REGISTRO', url: '/acceso/component/movimientos/crear'},
                            { title: 'MOVIMIENTOS' }]
                    }      },
                { path: 'crear', component: MovimientoCreateComponent, data: {
                        title: 'GESTION MOVIMIENTOS',
                        urls: [{ title: 'INICIO', url: '/acceso/dashboard' },
                            { title: 'LISTADO', url: '/acceso/component/movimientos/listar'},
                            { title: 'NUEVO REGISTRO' }]
                    }
                },
                { path: 'editar/:id', component: MovimientoEditComponent, data: {
                        title: 'EDITAR MOVIMIENTOS',
                        urls: [{ title: 'INICIO', url: '/acceso/dashboard' },
                            { title: 'LISTADO', url: '/acceso/component/movimientos/listar'},
                            { title: 'MODIFICACIÓN' }]
                    }
                }]
        },
//rutas factura venta
        {  path: 'facturas',
            canActivate: [AuthGuard],
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'NUEVO REGISTRO',
                        url: '/acceso/component/facturas/crear'
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'LISTADO',
                        url: '/acceso/component/facturas/listar'
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'LISTADO',
                        url: '/acceso/component/facturas/listar'
                    }, {
                        title: 'MODIFICACIÓN'
                    }]
                }
            }]
        }, {
            path: 'lecturas',
            canActivate: [AuthGuard],
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'NUEVO REGISTRO',
                        url: '/acceso/component/lecturas/crear'
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'LISTADO',
                        url: '/acceso/component/lecturas/listar'
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'LISTADO',
                        url: '/acceso/component/lecturas/listar'
                    }, {
                        title: 'MODIFICACIÓN'
                    }]
                }
            }]
        }, {
            path: 'medidores',
            canActivate: [AuthGuard],
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'NUEVO REGISTRO',
                        url: '/acceso/component/medidores/crear'
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'LISTADO',
                        url: '/acceso/component/medidores/listar'
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'LISTADO',
                        url: '/acceso/component/medidores/listar'
                    }, {
                        title: 'MODIFICACIÓN'
                    }]
                }
            }]
        }, {
            path: 'multas',
            canActivate: [AuthGuard],
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'NUEVO REGISTRO',
                        url: '/acceso/component/multas/crear'
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'LISTADO',
                        url: '/acceso/component/multas/listar'
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'LISTADO',
                        url: '/acceso/component/multas/listar'
                    }, {
                        title: 'MODIFICACIÓN'
                    }]
                }
            }]
        }, {
            path: 'pagos',
            canActivate: [AuthGuard],
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'NUEVO REGISTRO',
                        url: '/acceso/component/pagos/crear'
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'LISTADO',
                        url: '/acceso/component/pagos/listar'
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'pagos',
                        url: '/acceso/component/pagos/listar'
                    }, {
                        title: 'MODIFICACIÓN'
                    }]
                }
            }]
        }, {
            path: 'parametros',
            canActivate: [AuthGuard],
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'NUEVO REGISTRO',
                        url: '/acceso/component/parametros/crear'
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'LISTADO',
                        url: '/acceso/component/parametros/listar'
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'LISTADO',
                        url: '/acceso/component/parametros/listar'
                    }, {
                        title: 'MODIFICACIÓN'
                    }]
                }
            }]
        }, {
            path: 'servicios',
            canActivate: [AuthGuard],
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'NUEVO REGISTRO',
                        url: '/acceso/component/servicios/crear'
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'LISTADO',
                        url: '/acceso/component/servicios/listar'
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'LISTADO',
                        url: '/acceso/component/servicios/listar'
                    }, {
                        title: 'MODIFICACIÓN'
                    }]
                }
            }]
        }, {
            path: 'tipousuarios',
            canActivate: [AuthGuard],
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'NUEVO REGISTRO',
                        url: '/acceso/component/tipousuarios/crear'
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'LISTADO',
                        url: '/acceso/component/tipousuarios/listar'
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'LISTADO',
                        url: '/acceso/component/tipousuarios/listar'
                    }, {
                        title: 'MODIFICACIÓN'
                    }]
                }
            }]
        }, {
            path: 'usuarios',
            canActivate: [AuthGuard],
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'NUEVO REGISTRO',
                        url: '/acceso/component/usuarios/crear'
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'LISTADO',
                        url: '/acceso/component/usuarios/listar'
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'LISTADO',
                        url: '/acceso/component/usuarios/listar'
                    }, {
                        title: 'MODIFICACIÓN'
                    }]
                }
            }]
        },
        {
            path: 'privilegios',
            component: PrivilegioComponent,
            canActivate: [AuthGuard],
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
                        url: '/acceso/dashboard'
                    }, {
                        title: 'NUEVO REGISTRO',
                        url: '/acceso/component/privilegios/crear'
                    }, {
                        title: 'PRIVILEGIOS'
                    }]
                }
            }, {
                path: 'crear',
                component: PrivilegioCreateComponent,
                data: {
                    title: 'ADMINISTRAR PRIVILEGIO',
                    urls: [{
                        title: 'INICIO',
                        url: '/acceso/dashboard'
                    }, {
                        title: 'ASIGNACIÓN PRIVILEGIO'
                    }]
                }
            }, {
                path: 'editar/:id',
                component: PrivilegioEditComponent,
                data: {
                    title: 'EDITAR PRIVILEGIO',
                    urls: [{
                        title: 'INICIO',
                        url: '/acceso/dashboard'
                    }, {
                        title: 'LISTADO',
                        url: '/acceso/component/privilegios/listar'
                    }, {
                        title: 'MODIFICACIÓN'
                    }]
                }
            }]
        }
    ]
}];