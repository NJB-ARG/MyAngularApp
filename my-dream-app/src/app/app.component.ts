import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ComunicacionService } from './comunicacion.service';
import { User } from './models/User';

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

  public userGlobal = new User();  

  public listaServicios: string[] = 
  [
    'Discovery',
    'Analysis',
    'Design',
    'Development',
    'Testing',
    'Deployment',
    'Maintenance',
    'Additional Services'
  ] 
;

  //agrego el communicationService
  constructor(private communicationService: ComunicacionService){
    //no se utiliza tanto mas que para iniciaizar valores por defecto 
    console.log('AppComponent - Constructor');
    this.user = "NJB";

    setTimeout(() => {
      this.user = "Norber";
      this.titlePadre = "1 setTimeout titlePadre";
      this.tituloPadre = "2 setTimeout tituloPadre";
      //Enviar un nuevo valor al servicio para la variable observable user$
      const userNew = new User();
      userNew.username = 'Norbi';
      this.communicationService.user$.next(userNew); 
    }, 6000);

    //Prueba de agregado en lista HTML
    this.listaServicios.push('Consultoria Estratégica');
  }
  
  public ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('AppComponent - ngOnInit');
    //no está inicializada la vista y el HTML todavía no está renderizado aquí 
    setTimeout(() => {
      this.userGlobal.username = 'AppComponent-userGlobal-ngOnInit';
      this.communicationService.user$.next(this.userGlobal);
    }, 8000);    
  }

  public ngAfterContentInit(): void {
    //throw new Error("Method not implemented.");
    //Si tenemos que interactuar con la vista se hace desde acá, no son muchos los casos
    //por ejemplo como hacemos con Jquery
    console.log('AppComponent - ngAfterContentInit');
  }

  public onSalidaPadre(event: string): void {
    console.log('AppComponent - onSalidaPadre', event);
  }

  public onSalidaPadre2(event: number): void {
    console.log('AppComponent - onSalidaPadre2', event);
  }

}
