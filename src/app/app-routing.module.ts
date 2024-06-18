import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulosComponent } from '../app/modulos/modulos.component';

const routes: Routes = [
  { path: 'client-modules', component: ModulosComponent },
  { path: '', redirectTo: '/client-modules', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
