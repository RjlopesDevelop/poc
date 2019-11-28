import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroisListaComponent } from './herois-lista/herois-lista.component';
import { HeroisFormComponent } from './herois-form/herois-form.component';

const routes: Routes = [
  { path: '', component: HeroisListaComponent },
  { path: 'novo', component: HeroisFormComponent },
  { path: 'editar/:id', component: HeroisFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroisRoutingModule { }
