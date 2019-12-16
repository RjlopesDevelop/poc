import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule  } from '@angular/forms';
import { HeroisRoutingModule } from './herois-routing.module';
import { HeroisListaComponent } from './herois-lista/herois-lista.component';
import { HeroisFormComponent } from './herois-form/herois-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeroisListaComponent, HeroisFormComponent],
  imports: [
    CommonModule,
    HeroisRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class HeroisModule { }
