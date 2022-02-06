import { Contacto } from "./contacto";

export class Animales {

    id?:string;
    especie?:string;
    condicion?:string;
    nombre?:string;
    pelajeColor?:string;
    identificacion?:boolean;
    comentario?:string;
    foto?:string;
    idContacto?:string;


    constructor(id:string, especie:string, condicion:string, nombre:string, pelajeColor:string, identificacion:boolean, comentario:string, foto:string, idContacto:string){
        this.id = id;
        this.especie = especie;
        this.condicion = condicion;
        this.nombre = nombre;
        this.pelajeColor = pelajeColor;
        this.identificacion = identificacion;
        this.comentario = comentario;
        this.foto = foto;
        this.idContacto = idContacto;
    }

    public toJSON(){
        return {"id": this.id,
        "especie": this.especie,
        "condicion": this.condicion,
        "nombre": this.nombre,
        "pelajeColor": this.pelajeColor,
        "identificacion": this.identificacion,
        "comentario": this.comentario,
        "foto": this.foto,
        "idContacto": this.idContacto};
    }

}
