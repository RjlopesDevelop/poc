import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroisListaComponent } from './herois-lista/herois-lista.component';
import { HeroisFormComponent } from './herois-form/herois-form.component';
import { HeroResolverGuard } from './guards/hero-resolver.guard';

const routes: Routes = [
  { path: '', component: HeroisListaComponent },
  {
    path: 'novo',
    component: HeroisFormComponent,
    resolve: {
      hero: HeroResolverGuard
    }
  },
  {
    path: 'editar/:id',
    component: HeroisFormComponent,
    resolve: {
      hero: HeroResolverGuard
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroisRoutingModule { }
