import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'herois'
  },
  {
    path: 'herois',
    // loadChildren: './herois/herois.module#HeroisModule'
    loadChildren: () => import('./herois/herois.module').then(m => m.HeroisModule)
  },
  {
    path: 'upload',
   // loadChildren: './upload-file/upload-file.module#UploadFileModule'
    loadChildren: () => import('./upload-file/upload-file.module').then(m => m.UploadFileModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
