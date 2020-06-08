import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit{
  public title = "Titulo Base";
  public titlePadre = 'titlePadre - AppComponent Title';
  public tituloPadre = 'tituloPadre - AppComponent Titulo';
  public user = "";

  constructor(){
    //no se utiliza tanto mas que para iniciaizar valores por defecto 
    console.log('AppComponent - Constructor');
    this.user = "NJB";

    setTimeout((function() {
      this.user = "Norber";
      this.titlePadre = "1 setTimeout titlePadre";
      this.tituloPadre = "2 setTimeout tituloPadre";
    }).bind(this), 4000);
  }
  
  public ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('AppComponent - ngOnInit');
    //no está inicializada la vista y el HTML todavía no está renderizado aquí  
  }

  public ngAfterContentInit(): void {
    //throw new Error("Method not implemented.");
    //Si tenemos que interactuar con la vista se hace desde acá, no son muchos los casos
    //por ejemplo como hacemos con Jquery
    console.log('AppComponent - ngAfterContentInit');
  }

  public onSalidaPadre(): void {
    console.log('AppComponent - onSalidaPadre');
  }

  public onSalidaPadre2(): void {
    console.log('AppComponent - onSalidaPadre2');
  }

}
