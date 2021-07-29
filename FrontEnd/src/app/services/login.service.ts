import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{environment} from '../../environments/environment'
import { Usuario } from '../models/usuario';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl=environment.endpoint;
    this.myApiUrl='/api/Login';
   }

   login(usuario: Usuario): Observable <any>{
     return this.http.post(this.myAppUrl+this.myApiUrl,usuario);
   }

   setGuardarName(data: string): void{
    localStorage.setItem('token',data);
   }

  //  getNombreUsuario(){
  //   return localStorage.getItem('nombreUsuario');
  //  }

  getToken(): any{
    const helper = new JwtHelperService();
   let t: any = localStorage.getItem('token');
  const decodedToken = helper.decodeToken(t);
  return decodedToken;
  }

   removeValue(): void{
     localStorage.removeItem('token')
   }
}
