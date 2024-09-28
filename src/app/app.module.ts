import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SeriesComponent } from './series/series.component';
import { TerminosComponent } from './terminos/terminos.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { DownloadXmlComponent } from './download-xml/download-xml.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SeriesComponent,
    TerminosComponent,
    AyudaComponent,
    PrivacidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DownloadXmlComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
