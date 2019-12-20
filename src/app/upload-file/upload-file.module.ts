import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadFileRoutingModule } from './upload-file-routing.module';
import { UploadFileComponent } from './upload-file/upload-file.component';
import {registerLocaleData} from '@angular/common';
import pt from '@angular/common/locales/pt-PT';

registerLocaleData(pt, 'pt-BR');


@NgModule({
  declarations: [UploadFileComponent],
  imports: [
    CommonModule,
    UploadFileRoutingModule
  ]
})
export class UploadFileModule { }
