import { Injectable } from '@angular/core';
import { CrudService } from '../shared/respository/crud.service';
import { IHero } from '../shared/interface/hero.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService extends CrudService<IHero> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}heros`);
  }
}
