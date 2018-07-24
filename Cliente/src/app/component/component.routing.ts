import { Routes } from '@angular/router';

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
import {ProveedorCreateComponent} from "./proveedor/proveedor-create/proveedor-create.component";
import {ProveedorIndexComponent} from "./proveedor/proveedor-index/proveedor-index.component";
import {ProveedorEditComponent} from "./proveedor/proveedor-edit/proveedor-edit.component";

export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'progressbar',
      component: NgbdpregressbarBasic,
      data: {
        title: 'Progressbar',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Progressbar'}]
      }
    },
    {
      path: 'proveedores',
      component: ProveedorComponent,
      children: [
          { path: '', redirectTo: 'listar', pathMatch: 'full' },
          { path: 'listar', component: ProveedorIndexComponent },
          { path: 'crear', component: ProveedorCreateComponent },
          { path: 'editar/:id', component: ProveedorEditComponent }
      ]
    },
    {
      path: 'pagination',
      component: NgbdpaginationBasic,
      data: {
        title: 'Pagination',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Pagination'}]
      }
    }, 
    {
      path: 'accordion',
      component: NgbdAccordionBasic,
      data: {
        title: 'Registro Datos XD',
        urls: [{title: 'Inicio',url: '/dashboard'},{title: 'Registro'},{title: 'Acordion'}]
      }
    }, 
    {
      path: 'alert',
      component: NgbdAlertBasic,
      data: {
        title: 'Alert',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Alert'}]
      }
    }, 
    {
      path: 'carousel',
      component: NgbdCarouselBasic,
      data: {
        title: 'Carousel',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Carousel'}]
      }
    },  
    {
      path: 'datepicker',
      component: NgbdDatepickerBasic,
      data: {
        title: 'Datepicker',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Datepicker'}]
      }
    }, 
    {
      path: 'dropdown',
      component: NgbdDropdownBasic,
      data: {
        title: 'Dropdown',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Dropdown'}]
      }
    }, 
    {
      path: 'modal',
      component: NgbdModalBasic,
      data: {
        title: 'Modal',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Modal'}]
      }
    }, 
    {
      path: 'poptool',
      component: NgbdPopTooltip,
      data: {
        title: 'Popover & Tooltip',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Popover & Tooltip'}]
      }
    }, 
    {
      path: 'rating',
      component: NgbdratingBasic,
      data: {
        title: 'Rating',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Rating'}]
      }
    }, 
    {
      path: 'tabs',
      component: NgbdtabsBasic,
      data: {
        title: 'Tabs',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Tabs'}]
      }
    }, 
    {
      path: 'timepicker',
      component: NgbdtimepickerBasic,
      data: {
        title: 'Timepicker',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Timepicker'}]
      }
    },  
    {
      path: 'typehead',
      component: NgbdtypeheadBasic,
      data: {
        title: 'Typehead',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Typehead'}]
      }
    },
    {
      path: 'buttons',
      component: ButtonsComponent,
      data: {
        title: 'Button',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Button'}]
      }
    },
    {
      path: 'cards',
      component: CardsComponent,
      data: {
        title: 'Card',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Card'}]
      }
    }]
  }
];
