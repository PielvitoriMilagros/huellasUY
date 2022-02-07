import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarMascotasComponent } from './pages/cargar-mascotas/cargar-mascotas.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { MascotasEncontradasComponent } from './pages/mascotas-encontradas/mascotas-encontradas.component';
import { MascotasPerdidasComponent } from './pages/mascotas-perdidas/mascotas-perdidas.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'encontradas',component:MascotasEncontradasComponent},
  {path:'perdidas',component:MascotasPerdidasComponent},
  {path:'cargademascota',component:CargarMascotasComponent},
  {path:'error',component:ErrorComponent},
  {path:'**',component:ErrorComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
