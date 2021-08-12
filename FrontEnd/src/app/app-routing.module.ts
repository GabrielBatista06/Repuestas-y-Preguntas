import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarPasswordComponent } from './components/dashboard/cambiar-password/cambiar-password.component';
import { CuestionarioComponent } from './components/dashboard/cuestionario/cuestionario.component';
import { Cuestionario1Component } from './components/dashboard/cuestionario/cuestionario1/cuestionario1.component';
import { DetalleRespuestaComponent } from './components/dashboard/cuestionario/estadisticas/detalle-respuesta/detalle-respuesta.component';
import { EstadisticasComponent } from './components/dashboard/cuestionario/estadisticas/estadisticas.component';
import { NuevoCuestionarioComponent } from './components/dashboard/cuestionario/nuevo-cuestionario/nuevo-cuestionario.component';
import { PasoDosComponent } from './components/dashboard/cuestionario/nuevo-cuestionario/paso-dos/paso-dos.component';
import { PasoUnoComponent } from './components/dashboard/cuestionario/nuevo-cuestionario/paso-uno/paso-uno.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { IngresarNombreComponent } from './components/inicio/list-cuestionarios/ingresar-nombre/ingresar-nombre.component';
import { ListCuestionariosComponent } from './components/inicio/list-cuestionarios/list-cuestionarios.component';
import { PreguntaComponent } from './components/inicio/list-cuestionarios/pregunta/pregunta.component';
import { RespuestaCuestionarioComponent } from './components/inicio/list-cuestionarios/respuesta-cuestionario/respuesta-cuestionario.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegistroComponent } from './components/inicio/registro/registro.component';
import { InicioComponent } from './componets/inicio/inicio.component';
import { AuthGuard } from './helpers/auth.guard';
import { RespuestaCuestionarioService } from './services/respuesta-cuestionario.service';

const routes: Routes = [
 {path: '', redirectTo : '/inicio', pathMatch: 'full'},
 { path: 'inicio', component: InicioComponent, children:[

 { path: '', component: BienvenidaComponent },
 { path: 'registro', component: RegistroComponent },
 { path: 'login', component: LoginComponent },
 {path: 'listCuestionario', component: ListCuestionariosComponent},
 {path:'ingresarNombre', component:IngresarNombreComponent},
 {path:'pregunta', component:PreguntaComponent},
 {path:'respuestaCuestionario', component:RespuestaCuestionarioComponent}
 ]},
 {path:'dashboard', component:DashboardComponent, canActivate: [AuthGuard], children:[
  {path:'',component:CuestionarioComponent},
  {path:'cambiarPassword',component:CambiarPasswordComponent},
  {path:'verCuestionario/:id', component: Cuestionario1Component},
  {path:'estadisticas/:id', component: EstadisticasComponent},
  {path:'detalleRespuesta/:id', component: DetalleRespuestaComponent},
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
