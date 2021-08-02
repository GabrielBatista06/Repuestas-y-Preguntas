import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pregunta } from 'src/app/models/pregunta';
import { CuestionarioService } from 'src/app/services/cuestionario.service';

@Component({
  selector: 'app-paso-dos',
  templateUrl: './paso-dos.component.html',
  styleUrls: ['./paso-dos.component.css']
})
export class PasoDosComponent implements OnInit {
  tituloCuestionario='';
  descripcionCuestionario='';

  listPreguntas: Pregunta[] =[];

  constructor(private cuestionariService: CuestionarioService,
              private toastr: ToastrService,
              private router: Router ) { }

  ngOnInit(): void {
    this.tituloCuestionario=this.cuestionariService.tituloCuestionario;
    this.descripcionCuestionario=this.cuestionariService.descripcionCuestionario;
  }
  
  guardarPregunta(pregunta:Pregunta): void{
    this.listPreguntas.push(pregunta);
    console.log(this.listPreguntas);
  }

  eliminarPregunta(index:number): void{
    this.listPreguntas.splice(index,1);
  }
}
