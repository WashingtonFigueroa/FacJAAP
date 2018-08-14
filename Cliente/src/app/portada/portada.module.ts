import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortadaRoutingModule } from './portada-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PortadaRoutingModule
  ],
  declarations: [PrincipalComponent]
})
export class PortadaModule { }
