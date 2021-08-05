export class Repuesta{
    id?:number;
    Descripcion: string;
    esCorrecta:boolean;

    constructor(descripcion: string, esCorrecta: boolean, id?: number){
        this.id = id;
        this.Descripcion = descripcion;
        this.esCorrecta = esCorrecta;
    }
}