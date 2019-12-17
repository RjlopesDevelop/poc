import { Component, OnInit, ViewChild } from '@angular/core';
import { HeroService } from '../hero.service';
import { Observable, Subject, empty, EMPTY } from 'rxjs';
import { IHero } from '../../shared/interface/hero.interface';
import { take, catchError, switchMap } from 'rxjs/operators';
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
  deleteModalRef: BsModalRef;
  heroSelected: IHero;
  @ViewChild('deleteModal', {static: true}) deleteModal: any;

  constructor(
    private service: HeroService,
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
        return EMPTY;
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
  onEdit(id: any) {
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  onDelete(hero: IHero) {
    this.heroSelected = hero;
    // this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja remover esse curso?');
    result$.asObservable()
    .pipe(
      take(1),
      switchMap(result => result ? this.service.remove(hero.id) : EMPTY)
    ).subscribe(
      success => {
        this.onRefresh();
       // this.deleteModalRef.hide();
      },
      error => {
        this.alertService.showAlertDanger('Erro ao remover hero. Tente novamente mais tarde.');
       // this.deleteModalRef.hide();
      }
    );
  }
  // onConfirmDelete() {
  //   this.service.remove(this.heroSelected.id)
  //   .subscribe(
  //     success => {
  //       this.onRefresh();
  //       this.deleteModalRef.hide();
  //     },
  //     error => {
  //       this.alertService.showAlertDanger('Erro ao remover hero. Tente novamente mais tarde.');
  //      // this.deleteModalRef.hide();
  //     },
  //   );
  // }

  // onDeclineDelete() {
  //   this.deleteModalRef.hide();
  // }
}
