import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '/starter', title: 'Página de inicio', icon: 'mdi mdi-gauge', class: '', label: '', labelClass: '', extralink: false, submenu: []
    },
    {
        path: '', title: 'Egresos', icon: 'mdi mdi-bullseye', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/component/proveedores', title: 'Proveedor', icon: 'mdi mdi-account-plus', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/materiales', title: 'Material', icon: 'mdi mdi-buffer', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/carousel', title: 'Factura Compra', icon: 'mdi mdi-cart', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/dropdown', title: 'Egresos', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/modal', title: 'Inventario', icon: 'mdi-contrast-box', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Ingresos', icon: 'mdi mdi-bullseye', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/component/modal', title: 'Parametros', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/accordion', title: 'Cliente', icon: 'mdi mdi-account-plus', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/alert', title: 'Medidores', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/carousel', title: 'Servicio', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/carousel', title: 'Pago Servicio', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/dropdown', title: 'multas', icon: 'mdi-book-plus', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Operador', icon: 'mdi mdi-account-circle', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/component/accordion', title: 'Lectura', icon: 'mdi mdi-water-pump', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/alert', title: 'Direcciones', icon: 'mdi mdi-account-card-details', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    },
    {
        path: '/starter', title: 'Factura Venta', icon: 'mdi mdi-note-text', class: '', label: '', labelClass: '', extralink: false, submenu: []
    },
    {
        path: '', title: 'material para reutilizar', icon: 'mdi mdi-bullseye', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/component/accordion', title: 'Accordion', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/alert', title: 'Alert', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/carousel', title: 'Carousel', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/dropdown', title: 'Dropdown', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/modal', title: 'Modal', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/pagination', title: 'Pagination', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/poptool', title: 'Popover & Tooltip', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/progressbar', title: 'Progressbar', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/rating', title: 'Ratings', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/tabs', title: 'Tabs', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/timepicker', title: 'Timepicker', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/buttons', title: 'Button', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/component/cards', title: 'Card', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    }    
];

