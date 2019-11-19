import { Component, OnInit } from '@angular/core';
import { HeroisService } from '../herois.service';
import { Observable, Subject, empty } from 'rxjs';
import { IHero } from '../hero.interface';
import { take, catchError } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';

@Component({
  selector: 'app-herois-lista',
  templateUrl: './herois-lista.component.html',
  styleUrls: ['./herois-lista.component.css'],
  preserveWhitespaces: true
})
export class HeroisListaComponent implements OnInit {

  heros$: Observable<IHero[]>;
  error$ = new Subject<boolean>();
  bsModalRef: BsModalRef;
  constructor(
    private service: HeroisService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.list();
  }
  private list(): void {
    this.heros$ = this.service.getAvengers().pipe(
     // take(1),
      catchError(error => {
        console.error(error);
        // this.error$.next(true);
        this.handleError();
        return empty();
      })
    );
  }
  onRefresh(): void {
    this.list();
  }
  handleError() {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Erro ao carregar cursos. Tente novamente mais tarde.';
  }
}
