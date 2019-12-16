import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { stringify } from 'querystring';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})

export class AlertModalService {

  constructor(private modalService: BsModalService) { }

  private showAlert(message: string, type: AlertTypes, dismissTimeout?: number) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

    if (dismissTimeout) {
      setTimeout(() => bsModalRef.hide(), dismissTimeout);
    }
  }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertTypes.DANGER);
  }

  showAlertSuccess(message: string) {
    this.showAlert(message, AlertTypes.SUCCESS, 3000);
  }
  showConfirm(title: string, message: string, cancelText?: string, continueText?: string ) {
    const bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);
    (bsModalRef.content as ConfirmModalComponent).title = title;
    (bsModalRef.content as ConfirmModalComponent).message = message;

    if (continueText) {
      (bsModalRef.content as ConfirmModalComponent).continueText = continueText;
    }

    if (cancelText) {
      (bsModalRef.content as ConfirmModalComponent).cancelText = cancelText;
    }

    return  (bsModalRef.content as ConfirmModalComponent).confirmResult;
  }

}
