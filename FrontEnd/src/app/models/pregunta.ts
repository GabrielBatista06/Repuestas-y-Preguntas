import { Repuesta } from "./repuesta";

export class Pregunta{
    decripcion: string;
    listRepuesta: Repuesta[];
    hide?:boolean;

    constructor(descripcion: string, repuesta: Repuesta[]){
        this.decripcion = descripcion;
        this.listRepuesta = repuesta;
        this.hide=true;
    }
}