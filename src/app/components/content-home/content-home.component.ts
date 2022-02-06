import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-home',
  templateUrl: './content-home.component.html',
  styleUrls: ['./content-home.component.css']
})
export class ContentHomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  public redireccionar(ruta:string):void{
    this.route.navigate(['/'+ruta])
  }

}
