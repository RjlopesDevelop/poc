import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroisRoutingModule } from './herois-routing.module';
import { HeroisListaComponent } from './herois-lista/herois-lista.component';

@NgModule({
  declarations: [HeroisListaComponent],
  imports: [
    CommonModule,
    HeroisRoutingModule
  ]
})
export class HeroisModule { }
