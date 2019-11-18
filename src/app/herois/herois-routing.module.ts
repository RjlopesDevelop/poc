import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroisListaComponent } from './herois-lista/herois-lista.component';

const routes: Routes = [
  {path: '', component: HeroisListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroisRoutingModule { }
