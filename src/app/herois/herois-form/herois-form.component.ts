import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HeroisService } from '../herois.service';
import { IHero } from '../hero.interface';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';


@Component({
  selector: "app-herois-form",
  templateUrl: "./herois-form.component.html",
  styleUrls: ["./herois-form.component.css"]
})
export class HeroisFormComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  hero: IHero;
  constructor(
    private fb: FormBuilder,
    private heroService: HeroisService,
    private alertService: AlertModalService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit() {


    // const heros = this.route.snapshot.data.IHero;
    // console.log('retorno: ', heros);

    // this.route.params
    // .pipe(
    //   map((params: any) => params['id']),
    //   switchMap(id => this.service.loadByID(id)),
    //   // switchMap(cursos => obterAulas)
    // )
    // .subscribe(curso => this.updateForm(curso));

    // concatMap -> ordem da requisiçao importa
    // mergeMap -> ordem nao importa
    // exhaustMap -> casos de login

    this.route.params
    .pipe(
      map((params: any) => params.id),
      switchMap(id => this.heroService.loadById(id)),
    )
    .subscribe( hero => this.updateForm(hero));

    this.form = this.fb.group({
      nome: [
        null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(13)]
      ],
      grupo: [
        null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(13)]
      ]
    });
  }

  updateForm(hero: IHero) {
    this.form.patchValue({
      id: hero.id,
      nome: hero.nome,
      grupo: hero.grupo
    });
  }
  hasError(field: string) {
    return this.form.get(field).errors;
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      console.log(this.form.value);

      this.heroService.postHero(this.form.value).subscribe(
        success => {
          this.alertService.showAlertSuccess('Herói criado com sucesso!');
          this.location.back();

        },
        error => this.alertService.showAlertDanger('Error ao adicionar novo herói. Tente novamente.'),
        () => console.log('processo completo')
      );
    }
  }
  onCancel() {
    this.submitted = false;
    this.form.reset();
    // console.log('onCancel');
  }
}
