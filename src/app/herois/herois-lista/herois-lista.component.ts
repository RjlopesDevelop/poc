import { Component, OnInit } from '@angular/core';
import { HeroisService } from '../herois.service';
import { Observable } from 'rxjs';
import { IHero } from '../hero.interface';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-herois-lista',
  templateUrl: './herois-lista.component.html',
  styleUrls: ['./herois-lista.component.css']
})
export class HeroisListaComponent implements OnInit {

  heros$: Observable<IHero[]>;
  constructor(private service: HeroisService) { }

  ngOnInit() {
    this.list();
  }
  private list(): void {
    try {
      // this.http.get(`http://localhost:5000/api/values`).subscribe((response: IHero) => this.avengers = response);
      this.heros$ = this.service.getAvengers().pipe(take(1));
      // .subscribe(
      //   (response: IHero) => this.avengers = response,
      //   error => console.error(error));
    } catch (error) {
      console.error(error);
    }
  }
}
