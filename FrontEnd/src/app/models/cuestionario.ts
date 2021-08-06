import { Pregunta } from "./pregunta";

export class Cuestionario{
    id?: number;
    nombre: string;
    Descripcion: string;
    fechaCreacion?: Date;
    listPreguntas: Pregunta[];

    constructor(nombre: string, Descripcion: string, fechaCreacion: Date, listPreguntas: Pregunta[]){

        this.nombre=nombre;
        this.Descripcion=Descripcion;
        this.fechaCreacion=fechaCreacion;
        this.listPreguntas=listPreguntas;
    }

}
