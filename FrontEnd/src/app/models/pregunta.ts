import { Repuesta } from "./repuesta";

export class Pregunta{
    Descripcion: string;
    listRepuesta: Repuesta[];
    hide?:boolean;

    constructor(Descripcion: string, repuesta: Repuesta[]){
        this.Descripcion = Descripcion;
        this.listRepuesta = repuesta;
        this.hide=true;
    }
}