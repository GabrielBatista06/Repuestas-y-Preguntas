import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarPasswordComponent } from './components/dashboard/cambiar-password/cambiar-password.component';
import { CuestionarioComponent } from './components/dashboard/cuestionario/cuestionario.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegistroComponent } from './components/inicio/registro/registro.component';
import { InicioComponent } from './componets/inicio/inicio.component';

const routes: Routes = [
 {path: '', redirectTo : '/inicio', pathMatch: 'full'},
 { path: 'inicio', component: InicioComponent, children:[

 { path: '', component: BienvenidaComponent },
 { path: 'registro', component: RegistroComponent },
 { path: 'login', component: LoginComponent },
 ]},
 {path:'dashboard', component:DashboardComponent, children:[
  {path:'',component:CuestionarioComponent},
  {path:'cambiarPassword',component:CambiarPasswordComponent}
 ]},
 {path: '', redirectTo : '/inicio', pathMatch: 'full'},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
