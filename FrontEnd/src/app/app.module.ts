//Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import{HttpClientModule, HTTP_INTERCEPTORS}from '@angular/common/http';

// Interceptos

import{AddTokenInterceptor} from '../app/helpers/add-token.interceptor';
//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componets/inicio/inicio.component';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegistroComponent } from './components/inicio/registro/registro.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CambiarPasswordComponent } from './components/dashboard/cambiar-password/cambiar-password.component';
import { CuestionarioComponent } from './components/dashboard/cuestionario/cuestionario.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { NuevoCuestionarioComponent } from './components/dashboard/cuestionario/nuevo-cuestionario/nuevo-cuestionario.component';
import { PasoUnoComponent } from './components/dashboard/cuestionario/nuevo-cuestionario/paso-uno/paso-uno.component';
import { NuevaPreguntaComponent } from './components/dashboard/cuestionario/nuevo-cuestionario/paso-dos/nueva-pregunta/nueva-pregunta.component';
import { PasoDosComponent } from './components/dashboard/cuestionario/nuevo-cuestionario/paso-dos/paso-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BienvenidaComponent,
    LoginComponent,
    RegistroComponent,
    DashboardComponent,
    CambiarPasswordComponent,
    CuestionarioComponent,
    NavbarComponent,
    LoadingComponent,
    NuevoCuestionarioComponent,
    PasoUnoComponent,
    PasoDosComponent,
    NuevaPreguntaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }