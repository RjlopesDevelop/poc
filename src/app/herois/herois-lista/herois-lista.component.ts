import { Component, OnInit } from '@angular/core';
import { HeroisService } from '../herois.service';
import { Observable, Subject, empty } from 'rxjs';
import { IHero } from '../hero.interface';
import { take, catchError } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Router, ActivatedRoute } from '@angular/router';

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
    private modalService: BsModalService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute) { }

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
    this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');
    this.error$.next(true);
    // this.bsModalRef = this.modalService.show(AlertModalComponent);
    // this.bsModalRef.content.type = 'danger';
    // this.bsModalRef.content.message = 'Erro ao carregar cursos. Tente novamente mais tarde.';
  }
  onEdit(id) {
    this.router.navigate(['editar', id], {relativeTo: this.route});

  }
}
