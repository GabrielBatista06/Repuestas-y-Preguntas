import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Pregunta } from 'src/app/models/pregunta';
import { Repuesta } from 'src/app/models/repuesta';

@Component({
  selector: 'app-nueva-pregunta',
  templateUrl: './nueva-pregunta.component.html',
  styleUrls: ['./nueva-pregunta.component.css']
})
export class NuevaPreguntaComponent implements OnInit {

  nuevaPregunta: FormGroup;
  pregunta!: Pregunta;
  rtaCorrecta=0;
  @Output() enviarPregunta=new EventEmitter<Pregunta>();

  constructor(private fb:FormBuilder,
              private toastr: ToastrService) {
  this.nuevaPregunta=this.fb.group({
    titulo: ['',Validators.required],
    repuesta: this.fb.array([])
  })
  }

  ngOnInit(): void {
    this.agregarRepuestaForDefault();
  }

  get getRepuestas(): FormArray{
    return this.nuevaPregunta.get('repuesta') as FormArray;
  }

  agregarRepuesta():void{
    this.getRepuestas.push(this.fb.group({
      descripcion:['',Validators.required],
      esCorrecta:0
    }));
  }

  agregarRepuestaForDefault(): void{
    this.agregarRepuesta();
    this.agregarRepuesta()
  }

  eliminarRepuesta(index: number): void{
    if(this.getRepuestas.length === 2){
      this.toastr.error('Se deben agregar minimo 2 repuestas', 'Error!');
    }
    else{
      this.getRepuestas.removeAt(index);
    }
  }

  setRespuestaValida(index:number): void{

    this.rtaCorrecta=index;
  }

  agregarPregunta():void{
    const descripcionPregunta = this.nuevaPregunta.get('titulo')?.value;

    const arrayRespuestas=this.nuevaPregunta.get('repuesta')?.value;

    const arrayRta: Repuesta[] = [];

    arrayRespuestas.forEach((element: { descripcion: string; esCorrecta: any; }, index: any) => {
      const respuesta: Repuesta = new Repuesta(element.descripcion, false);
      if (index === this.rtaCorrecta){
        respuesta.esCorrecta =true;

      }

      arrayRta.push(respuesta);
    });

    const pregunta: Pregunta = new Pregunta (descripcionPregunta, arrayRta);

    this.enviarPregunta.emit(pregunta);
    this.reset();
  }

  reset(): void{
    this.nuevaPregunta.reset();
    this.getRepuestas.clear();
    this.agregarRepuestaForDefault();
    this.rtaCorrecta=0;
  }
}
