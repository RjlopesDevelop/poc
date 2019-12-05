import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HeroisService } from '../herois.service';
import { IHero } from '../hero.interface';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Location } from '@angular/common';


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
    private location: Location) { }

  ngOnInit() {
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
