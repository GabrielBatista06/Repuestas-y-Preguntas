import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Cuestionario } from '../models/cuestionario';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {
  tituloCuestionario!: string;
  descripcionCuestionario!:string;
  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl=environment.endpoint;
    this.myApiUrl='/api/Cuestionario/';
   }

   guardarCuestionario(cuestionario: Cuestionario): Observable<any>{
     console.log(JSON.stringify(cuestionario));

    return this.http.post(this.myAppUrl + this.myApiUrl, cuestionario);
   }

   getLisCuestionario():Observable<any>{
     return this.http.get(this.myAppUrl + this.myApiUrl + 'GetListCuestionarioByUser');
   }
}
