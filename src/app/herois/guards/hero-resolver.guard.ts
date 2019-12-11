import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IHero } from '../hero.interface';
import { HeroisService } from '../herois.service';

@Injectable({
  providedIn: 'root'
})
export class HeroResolverGuard implements Resolve<IHero> {
  constructor(private service: HeroisService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IHero> {
    if (route.params && route.params.id) {
      return this.service.loadById(route.params.id);
    }
    return of({
      id: null,
      nome: null,
      grupo: null
    });
  }

}
