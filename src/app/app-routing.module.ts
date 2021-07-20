import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './componet/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './componet/inicio/login/login.component';
import { RegistroComponent } from './componet/inicio/registro/registro.component';

const routes: Routes = [
  //{path: '', redirectTo:'bienvenida,',pathMatch:'full'},
 { path: '', component: BienvenidaComponent },
 { path: 'bienvenida', component: BienvenidaComponent },
 { path: 'registro', component: RegistroComponent },
 { path: 'login', component: LoginComponent },
 {path: '**', redirectTo:'/bienvenida,',pathMatch:'full'}, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
