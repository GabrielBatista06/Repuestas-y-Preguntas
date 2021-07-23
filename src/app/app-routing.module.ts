import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
 {path: '', redirectTo : '/bienvenida', pathMatch: 'full'},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
