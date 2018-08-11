import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./component/auth.guard";
import {PortadaModule} from "./portada/portada.module";

export const Approutes: Routes = [
{
    path: 'acceso',
    component: FullComponent,
    children: [
        { path: '', redirectTo: '/login', pathMatch: 'full' },
        { path: 'login', component: LoginComponent },
        { path: 'login/:param', component: LoginComponent },
        { path: 'starter', loadChildren: './starter/starter.module#StarterModule',
            canActivate: [AuthGuard]},
        { path: 'component',
            loadChildren: './component/component.module#ComponentsModule',
            canActivate: [AuthGuard]},
    ]
},
{ path: '' , loadChildren: './portada/portada.module#PortadaModule'},
{
    path: '**',
    redirectTo: '/acceso/login'
}];


