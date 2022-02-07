import { Component, OnInit } from '@angular/core';
import { Animales } from 'src/app/models/animales';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-mascotas-encontradas',
  templateUrl: './mascotas-encontradas.component.html',
  styleUrls: ['./mascotas-encontradas.component.css']
})
export class MascotasEncontradasComponent implements OnInit {

  public animalesEncontrados?:Array<Animales>;

  constructor(private db:DbService) {

    db.getAnimales().subscribe((res:any)=>{
      let animal;
      let array = new Array();
      for (let index = 0; index < res.length; index++) {
        const element = res[index];
        let anim = element.payload.doc.data();
        animal = new Animales(element.payload.doc.id,anim.especie == null ? "No posee":anim.especie,anim.condicion,anim.nombre == null ? "No posee":anim.nombre,anim.pelajeColor == null ? "No posee":anim.pelajeColor,anim.identificacion,anim.comentario,anim.foto,anim.idContacto);
        array.push(animal);
        console.log(animal);
      }

      

      this.animalesEncontrados = array.filter(elem => elem.condicion == 'Encontrado');
    });

   }

  ngOnInit(): void {
  }

}
