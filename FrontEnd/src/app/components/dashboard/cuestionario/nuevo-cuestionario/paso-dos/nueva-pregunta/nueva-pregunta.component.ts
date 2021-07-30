import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Pregunta } from 'src/app/models/pregunta';

@Component({
  selector: 'app-nueva-pregunta',
  templateUrl: './nueva-pregunta.component.html',
  styleUrls: ['./nueva-pregunta.component.css']
})
export class NuevaPreguntaComponent implements OnInit {

  nuevaPregunta: FormGroup;
  pregunta!: Pregunta;
  rtaCorrecta=0;

  constructor(private fb:FormBuilder,
              private toastr: ToastrService) {
  this.nuevaPregunta=this.fb.group({
    titulo:['',Validators.required],
    repuesta: this.fb.array([])
  })
               }

  ngOnInit(): void {
    this.agregarRepuestaForDefault();
  }

  get getRepuestas():FormArray{
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
}
