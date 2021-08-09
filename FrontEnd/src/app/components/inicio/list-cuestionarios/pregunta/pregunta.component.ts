import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pregunta } from 'src/app/models/pregunta';
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

  constructor(private respuestaCuestionarioService: RespuestaCuestionarioService,
             private router: Router,
              private cuestionarioService : CuestionarioService ) { }

  ngOnInit(): void {
    this.idCuestionario=this.respuestaCuestionarioService.idCuestionario;
    if(this.idCuestionario == 0){
      this.router.navigate(['/inicio'])
    }
    this.getCuestionario();
  }

  getCuestionario(): void{
    this.loading=true;
    this.cuestionarioService.getCuestionario(this.idCuestionario).subscribe(data =>{
      console.log(data);
      this.listPreguntas=data.listPreguntas;
      this.loading=false;
    });
  }
  obtenerPregunta(): string{
    return this.listPreguntas[0].descripcion;
  }

  getIndex():number{
    return 0;
  }
}
