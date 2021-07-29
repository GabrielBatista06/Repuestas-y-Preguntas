export class Repuesta{
    id?:number;
    decripcion: string;
    esCorrecta:boolean;

    constructor(descripcion: string, esCorrecta: boolean, id?: number){
        this.id = id;
        this.decripcion = descripcion;
        this.esCorrecta = esCorrecta;
    }
}