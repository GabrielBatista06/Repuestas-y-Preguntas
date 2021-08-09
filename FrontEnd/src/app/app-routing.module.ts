import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarPasswordComponent } from './components/dashboard/cambiar-password/cambiar-password.component';
import { CuestionarioComponent } from './components/dashboard/cuestionario/cuestionario.component';
import { Cuestionario1Component } from './components/dashboard/cuestionario/cuestionario1/cuestionario1.component';
import { NuevoCuestionarioComponent } from './components/dashboard/cuestionario/nuevo-cuestionario/nuevo-cuestionario.component';
import { PasoDosComponent } from './components/dashboard/cuestionario/nuevo-cuestionario/paso-dos/paso-dos.component';
import { PasoUnoComponent } from './components/dashboard/cuestionario/nuevo-cuestionario/paso-uno/paso-uno.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { IngresarNombreComponent } from './components/inicio/list-cuestionarios/ingresar-nombre/ingresar-nombre.component';
import { ListCuestionariosComponent } from './components/inicio/list-cuestionarios/list-cuestionarios.component';
import { PreguntaComponent } from './components/inicio/list-cuestionarios/pregunta/pregunta.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegistroComponent } from './components/inicio/registro/registro.component';
import { InicioComponent } from './componets/inicio/inicio.component';

const routes: Routes = [
 {path: '', redirectTo : '/inicio', pathMatch: 'full'},
 { path: 'inicio', component: InicioComponent, children:[

 { path: '', component: BienvenidaComponent },
 { path: 'registro', component: RegistroComponent },
 { path: 'login', component: LoginComponent },
 {path: 'listCuestionario', component: ListCuestionariosComponent},
 {path:'ingresarNombre', component:IngresarNombreComponent},
 {path:'pregunta', component:PreguntaComponent},
 ]},
 {path:'dashboard', component:DashboardComponent, children:[
  {path:'',component:CuestionarioComponent},
  {path:'cambiarPassword',component:CambiarPasswordComponent},
  {path:'verCuestionario/:id', component: Cuestionario1Component},
  {path: 'nuevoCuestionario', component:NuevoCuestionarioComponent, children:[
    {path: 'pasoUno',component:PasoUnoComponent},
    {path:'pasoDos',component:PasoDosComponent},
  ]}
 ]},
 {path: '', redirectTo : '/inicio', pathMatch: 'full'},
 {path: '**', redirectTo : '/inicio', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
