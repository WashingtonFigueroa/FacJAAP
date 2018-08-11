import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortadaRoutingModule } from './portada-routing.module';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  imports: [
    CommonModule,
    PortadaRoutingModule
  ],
  declarations: [PrincipalComponent]
})
export class PortadaModule { }
