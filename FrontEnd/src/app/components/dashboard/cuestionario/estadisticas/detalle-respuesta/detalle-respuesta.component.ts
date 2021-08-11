import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cuestionario } from 'src/app/models/cuestionario';
import { RespuestaCuestionario } from 'src/app/models/respuestaCuestionario';
import { RespuestaCuestionarioDetalle } from 'src/app/models/respuestaCuestionarioDetalle';
import { RespuestaCuestionarioService } from 'src/app/services/respuesta-cuestionario.service';

@Component({
  selector: 'app-detalle-respuesta',
  templateUrl: './detalle-respuesta.component.html',
  styleUrls: ['./detalle-respuesta.component.css']
})
export class DetalleRespuestaComponent implements OnInit {
  idRespuesta: number;
  loading= false;
  cuestionario!: any;
  respuestass: RespuestaCuestionarioDetalle  []=[];


  constructor(private aRoute: ActivatedRoute,
              private respuestaCuestionarioService: RespuestaCuestionarioService ) {
                this.idRespuesta= Number(this.aRoute.snapshot.paramMap.get('id'));
               }

  ngOnInit(): void {
    this.getListRespuestasYCuestionario();
  }

  getListRespuestasYCuestionario():void{
   this.loading=true;
    this.respuestaCuestionarioService.getCuestionarioByIdRta(this.idRespuesta).subscribe(data =>{
     console.log(data);
      this.cuestionario = data.cuestionario;
     this.respuestass = data.respuestas;
      this.loading=false;
    })
  }
}
