import { Component, Input, OnInit } from '@angular/core';
import { Animales } from 'src/app/models/animales';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

@Input() listaAnimales:any;

constructor(){}

  ngOnInit(): void {
  }





}
