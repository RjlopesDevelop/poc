import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { CarouselModelComponent } from './carousel-model/carousel-model.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule.forRoot()
  ],
  declarations: [AlertModalComponent, CarouselModelComponent, ConfirmModalComponent],
  exports: [AlertModalComponent, CarouselModelComponent],
  // entryComponents: [AlertModalComponent,  ConfirmModalComponent]
})
export class SharedModule { }
