import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
{ path: '/starter', title: 'Página de inicio  ', icon: 'mdi mdi-home', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{
path: '', title: 'Configuracion  ', icon: 'mdi mdi-settings', class: 'has-arrow', label: '', labelClass: '', extralink: false,
submenu: [
{ path: '/component/tipousuarios/listar', title: 'Cargos  ', icon: 'ti-user', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/component/usuarios/listar', title: 'Usuarios  ', icon: 'mdi mdi-account-multiple', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/component/privilegios/listar', title: 'Privilegios  ', icon: 'mdi mdi-format-list-bulleted', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/login', title: 'Salir  ', icon: 'mdi mdi-wallet', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
]},
{
path: '', title: 'Administración  ', icon: 'mdi mdi-bullseye', class: 'has-arrow', label: '', labelClass: '', extralink: false,
submenu: [
{ path: '/component/materiales', title: 'Material  ', icon: 'mdi mdi-watermark', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/component/modal', title: 'Inventario  ', icon: 'mdi mdi-buffer', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/component/facturacompras', title: 'Egresos  ', icon: 'mdi mdi-cart', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/component/estadisticas', title: 'Estadisticas  ', icon: 'mdi mdi-poll', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
]}
,
{ path: '/component/parametros', title: 'Parametros  ', icon: 'mdi mdi-format-list-bulleted', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/component/clientes', title: 'Cliente  ', icon: 'mdi mdi-account-plus', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/component/medidores', title: 'Medidores  ', icon: 'mdi mdi-cup-water', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/component/servicios', title: 'Servicio  ', icon: 'mdi mdi-sitemap', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/component/multas', title: 'multas  ', icon: 'mdi mdi-currency-usd', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{path: '/component/lecturas', title: 'Lectura  ', icon: 'mdi mdi-water-pump', class: '', label: '', labelClass: '', extralink: false, submenu: []},
{ path: '/component/facturas/crear', title: 'Pago Servicio  ', icon: 'mdi mdi-format-color-fill', class: '', label: '', labelClass: '', extralink: false, submenu: []}

];

