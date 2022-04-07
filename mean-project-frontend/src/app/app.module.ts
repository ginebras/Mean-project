import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing,appRoutingProviders } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { CrearProyectosComponent } from './components/crear-proyectos/crearProyectos.component';
import { ErrorComponent } from './components/error/error.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { EditarComponent } from './components/editar/editar.component';
import { SliderComponent } from './components/slider/slider.component';
import { AppResaltadoDirective } from './app-resaltado.directive';

@NgModule({
  declarations: [
    AppComponent,
    SobremiComponent,
    ContactoComponent,
    ProyectosComponent,
    CrearProyectosComponent,
    ErrorComponent,
    DetallesComponent,
    EditarComponent,
    SliderComponent,
    AppResaltadoDirective
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
