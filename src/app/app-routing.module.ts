import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { TerminosComponent } from './terminos/terminos.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'terminos', component: TerminosComponent},
  { path: 'ayuda', component: AyudaComponent },
  { path: 'privacidad', component:PrivacidadComponent},
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, CommonModule]
  
})
export class AppRoutingModule { }
