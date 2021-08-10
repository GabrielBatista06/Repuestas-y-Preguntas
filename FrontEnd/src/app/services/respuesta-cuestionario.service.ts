import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cuestionario } from '../models/cuestionario';
import { RespuestaCuestionario } from '../models/respuestaCuestionario';

@Injectable({
  providedIn: 'root'
})
export class RespuestaCuestionarioService {
  myAppUrl: string;
  myApiUrl: string;
  nombreParticipante: string='';
  idCuestionario: number=0;
  respuesta: number []=[];
  cuestionario!: Cuestionario;
  constructor(private http:HttpClient) {
    this.myAppUrl=environment.endpoint;
    this.myApiUrl='/api/RespuestaCuestionario/';
  }

  guardarRespuestaCuestionario(respuestaCuestionario: RespuestaCuestionario):Observable<any>{
    console.log(JSON.stringify(respuestaCuestionario))
    return this.http.post(this.myAppUrl + this.myApiUrl, respuestaCuestionario)
  }

  getListCuestionarioRespuesta(idCuestionario: number):Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl + idCuestionario);
  }

  eliminarRespuestaCuestionario(idRespuestaCuestionario:number):Observable <any>{
    return this.http.delete(this.myAppUrl+ this.myApiUrl + idRespuestaCuestionario);
  }
}
