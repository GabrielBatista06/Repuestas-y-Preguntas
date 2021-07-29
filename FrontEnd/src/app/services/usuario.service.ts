import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import{environment} from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  myAppUrl: string;
  myApiUrl: string;

   

  constructor(private http: HttpClient) {
    this.myAppUrl=environment.endpoint;
    this.myApiUrl='/api/Usuario';

   }

  saveUser(usuario: Usuario):Observable<any>{
    return this.http.post(this.myAppUrl+this.myApiUrl,usuario);
  }

  changePassword(changePassword: string): Observable<any>{
    return this.http.put(this.myAppUrl+this.myApiUrl+'/CambiarPassword',changePassword)
  }
}
