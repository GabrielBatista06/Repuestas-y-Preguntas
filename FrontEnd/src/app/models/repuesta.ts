export class Repuesta{
    id?:number;
    descripcion: string;
    esCorrecta:boolean;

    constructor(descripcion: string, esCorrecta: boolean, id?: number){
        this.id = id;
        this.descripcion = descripcion;
        this.esCorrecta = esCorrecta;
    }
}