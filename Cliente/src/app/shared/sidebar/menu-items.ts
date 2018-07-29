import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
{
    path: '/starter', title: 'Página de inicio  ', icon: 'mdi mdi-gauge', class: '', label: '', labelClass: '', extralink: false, submenu: []
},
{
path: '', title: 'Administración  ', icon: 'mdi mdi-bullseye', class: 'has-arrow', label: '', labelClass: '', extralink: false,
submenu: [
{ path: '/component/proveedores', title: 'Proveedor  ', icon: 'mdi mdi-account-plus', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/component/materiales', title: 'Material  ', icon: 'mdi mdi-buffer', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/component/facturacompras', title: 'Factura Compra  ', icon: 'mdi mdi-cart', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/component/dropdown', title: 'Egresos  ', icon: 'mdi mdi-poll', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/component/modal', title: 'Inventario  ', icon: 'mdi mdi-buffer', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
]},
{ path: '/component/parametros', title: 'Parametros  ', icon: 'mdi mdi-settings', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/component/clientes', title: 'Cliente  ', icon: 'mdi mdi-account-plus', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/component/medidores', title: 'Medidores  ', icon: 'mdi mdi-cup-water', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/component/servicios', title: 'Servicio  ', icon: 'mdi mdi-sitemap', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{ path: '/component/multas', title: 'multas  ', icon: 'mdi mdi-currency-usd', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
{path: '/component/lecturas', title: 'Lectura  ', icon: 'mdi mdi-water-pump', class: '', label: '', labelClass: '', extralink: false, submenu: []},
{ path: '/component/facturas', title: 'Pago Servicio  ', icon: 'mdi mdi-format-color-fill', class: '', label: '', labelClass: '', extralink: false, submenu: []}

];

