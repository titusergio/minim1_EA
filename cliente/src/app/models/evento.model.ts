export class Evento {
    _id:string;
    nombre:string;
    fecha:string;
    descripcion:string;
    cordenadas:number;
    personas: Array<string>;

    constructor(){
        this._id="";
        this.nombre="";
        this.fecha="";
        this.descripcion="";
        this.cordenadas=0;
        this.personas=[];
    }


}
