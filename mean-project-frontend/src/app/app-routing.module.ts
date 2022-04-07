//MODULOS
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//COMPONENTES
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { CrearProyectosComponent } from './components/crear-proyectos/crearProyectos.component';
import { ErrorComponent } from './components/error/error.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { EditarComponent } from './components/editar/editar.component';

//RUTAS
const routes: Routes = [
  {path:'',component:SobremiComponent},
  {path:'sobremi',component:SobremiComponent},
  {path:'proyectos',component:ProyectosComponent},
  {path:'crear-proyectos',component:CrearProyectosComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'proyecto/:id',component:DetallesComponent},
  {path:'editar/:id',component:EditarComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders<any>=RouterModule.forRoot(routes);
