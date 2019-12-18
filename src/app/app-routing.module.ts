import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'upload'
  },
  {
    path: 'herois',
    loadChildren: './herois/herois.module#HeroisModule'
  },
  {
    path: 'upload',
    loadChildren: './upload-file/upload-file.module#UploadFileModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
