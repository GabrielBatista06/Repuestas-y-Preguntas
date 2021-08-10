import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pregunta } from 'src/app/models/pregunta';
import { RespuestaCuestionario } from 'src/app/models/respuestaCuestionario';
import { RespuestaCuestionarioDetalle } from 'src/app/models/respuestaCuestionarioDetalle';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { RespuestaCuestionarioService } from 'src/app/services/respuesta-cuestionario.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  idCuestionario: number=0;
  listPreguntas: any[] =[];
  loading=false;
  rtaConfirmada = false;
  opcionSeleccionada: any;
  index=0;
  idRespuestaSeleccionada: any=0;

  listRespuestaDetalle: RespuestaCuestionarioDetalle[] = [];

  constructor(private respuestaCuestionarioService: RespuestaCuestionarioService,
             private router: Router,
              private cuestionarioService : CuestionarioService ) { }

  ngOnInit(): void {
    this.idCuestionario=this.respuestaCuestionarioService.idCuestionario;
    if(this.idCuestionario == 0){
      this.router.navigate(['/inicio'])
    }
    this.getCuestionario();
    this.respuestaCuestionarioService.respuesta=[];
  }

  getCuestionario(): void{
    this.loading=true;
    this.cuestionarioService.getCuestionario(this.idCuestionario).subscribe(data =>{
      console.log(data);
      this.listPreguntas=data.listPreguntas;
      this.loading=false;
      this.respuestaCuestionarioService.cuestionario=data;
    });
  }
  obtenerPregunta(): string{
    return this.listPreguntas[this.index].descripcion;
  }

  getIndex():number{
    return this.index;
  }

  respuestaSeleccionada(respuesta: any, idRespuesta: number): void{
    this.opcionSeleccionada = respuesta ;
    this.rtaConfirmada=true;
    this.idRespuestaSeleccionada = idRespuesta;
  }
  AddClassOption(respuesta: any): string {
    if (respuesta === this.opcionSeleccionada ){
      return 'active text-light';
    }
    else{
      return ''
    }
  }

  Next(): void{
    this.respuestaCuestionarioService.respuesta.push(this.idRespuestaSeleccionada);

    // Creamos un objeto RespuestaDetalle
    const detalleRespuesta: RespuestaCuestionarioDetalle={
      respuestaId: this.idRespuestaSeleccionada
    };
    //Agregamos el objeto al array
    this.listRespuestaDetalle.push(detalleRespuesta);



    this.rtaConfirmada=false;
    this.index++;
    this.idRespuestaSeleccionada=null;

    if(this.index === this.listPreguntas.length){
      this.guardarRespuestaCuestionario()
    }
  }
    guardarRespuestaCuestionario():void{
      const rtaCuestionario: RespuestaCuestionario = {
        cuestionarioId:this.respuestaCuestionarioService.idCuestionario,
        nombreParticipante: this.respuestaCuestionarioService.nombreParticipante,
        listRtaCuestionarioDetalle: this.listRespuestaDetalle
      };
      this.loading=true;

      this.respuestaCuestionarioService.guardarRespuestaCuestionario(rtaCuestionario).subscribe(data => {
      this.loading=false;
      this.router.navigate(['/inicio/respuestaCuestionario']);
      }, error => {

        this.loading=false;
        console.log(error);

      });
    }
}
