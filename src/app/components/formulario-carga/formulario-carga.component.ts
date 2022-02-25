import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-carga',
  templateUrl: './formulario-carga.component.html',
  styleUrls: ['./formulario-carga.component.css']
})
export class FormularioCargaComponent implements OnInit {

  public forma!: FormGroup;
  
  public condicion:string = 'perdida';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.forma = this.fb.group({
      'nombre': [''],
      'especie': ['', Validators.required],
      'color': ['', Validators.required],
      'identif': ['', Validators.required],
      'comentario': ['', Validators.required]
    });
  }

  public aceptar(): void {
    console.log(this.forma.getRawValue());//devuelve json
  }

  eleccioncondicion(cond:any): void{
    this.condicion = cond;
  }


}
