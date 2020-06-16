import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user: User;
  
  //Especifico todas las dependencias que quiera INYECTAR
  constructor(
    //Inyección del servicio
    private CommunicationService: ComunicacionService
  ) 
  {   
    setTimeout(() => {
      this.user = new User();
      this.user.username = "Norberto Bordon";
      this.user.email = "norbi88njb@gmail.com";
    }, 2000); 
    
    console.log("setTimeout UserComponent ejecutado");
  }

  public ngOnInit(): void {
    console.log(this.CommunicationService);

    setTimeout(() => 
    {
      this.CommunicationService.user$.subscribe((userSubs: User) => {this.user = userSubs;});
    }, 10000);    
  }

}
