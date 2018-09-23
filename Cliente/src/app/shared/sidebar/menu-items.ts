import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
{ path: '/acceso/starter', title: 'Página de inicio  ', icon: 'mdi mdi-home', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{
path: '', title: 'Ajustes  ', icon: 'mdi mdi-settings', class: 'has-arrow', label: '', labelClass: '', extralink: false,
submenu: [
{ path: '/acceso/component/tipousuarios/listar', title: 'Cargos  ', icon: 'ti-user', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/acceso/component/usuarios/listar', title: 'Usuarios  ', icon: 'mdi mdi-account-multiple', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/acceso/component/privilegios/listar', title: 'Privilegios  ', icon: 'mdi mdi-format-list-bulleted', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/acceso/login/logout', title: 'Salir  ', icon: 'mdi mdi-wallet', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
]},
{
path: '', title: 'Administración', icon: 'mdi mdi-bullseye', class: 'has-arrow', label: '', labelClass: '', extralink: false,
submenu: [
{ path: '/acceso/component/materiales', title: 'Inventario  ', icon: 'mdi mdi-watermark', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/acceso/component/inventarios', title: 'Bodega  ', icon: 'mdi mdi-buffer', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/acceso/component/movimientos', title: 'Contabilidad ', icon: 'mdi mdi-chart-line', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/acceso/component/estadisticas/listar', title: 'Estadisticas  ', icon: 'mdi mdi-poll', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
]}
,
{ path: '/acceso/component/parametros', title: 'Parametros  ', icon: 'mdi mdi-format-list-bulleted', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/acceso/component/clientes', title: 'Cliente  ', icon: 'mdi mdi-account-plus', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/acceso/component/medidores', title: 'Medidores  ', icon: 'mdi mdi-cup-water', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/acceso/component/servicios', title: 'Servicio  ', icon: 'mdi mdi-sitemap', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/acceso/component/multas', title: 'multas  ', icon: 'mdi mdi-currency-usd', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{path: '/acceso/component/lecturas', title: 'Lectura  ', icon: 'mdi mdi-water-pump', class: '', label: '', labelClass: '', extralink: false, submenu: []},
{ path: '/acceso/component/facturas', title: 'Pago Planilla  ', icon: 'mdi mdi-format-color-fill', class: '', label: '', labelClass: '', extralink: false, submenu: []}

];

