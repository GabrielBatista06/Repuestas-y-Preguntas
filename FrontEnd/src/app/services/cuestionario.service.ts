import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cuestionario } from '../models/cuestionario';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {
  tituloCuestionario='';
  descripcionCuestionario='';
  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl=environment.endpoint;
    this.myApiUrl='/api/Cuestionario';
   }

   guardarCuestionario(cuestionario:Cuestionario):Observable <any>{

    return this.http.post(this.myAppUrl+this.myApiUrl,cuestionario);
   }
}
