import { Pregunta } from "./pregunta";

export class Cuestionario{
    id?: number;
    nombre: string;
    Descripcion: string;
    fechaCreacion?: Date;
    listPreguntas: Pregunta[];

    constructor(nombre: string, descripcion: string, fechaCreacion: Date, listPreguntas: Pregunta[]){

        this.nombre=nombre;
        this.Descripcion=descripcion;
        this.fechaCreacion=fechaCreacion;
        this.listPreguntas=listPreguntas;
    }

}