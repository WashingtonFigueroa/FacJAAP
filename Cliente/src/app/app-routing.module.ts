import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./component/auth.guard";

export const Approutes: Routes = [
{
    path: '',
    component: FullComponent,
    children: [
        { path: '', redirectTo: '/login', pathMatch: 'full' },
        { path: 'login', component: LoginComponent},
        { path: 'starter', loadChildren: './starter/starter.module#StarterModule',
            canActivate: [AuthGuard]},
        { path: 'component',
            loadChildren: './component/component.module#ComponentsModule',
            canActivate: [AuthGuard]},
    ]
},
{
    path: '**',
    redirectTo: '/login'
}];


