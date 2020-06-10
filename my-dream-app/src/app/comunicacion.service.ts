import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import {User} from './models/User';

@Injectable(/* {
  providedIn: 'root'
} */)
export class ComunicacionService {

  public user$: Subject<User> = new Subject();

  constructor() { 
    setTimeout( () => {
      const user = new User();
      user.username = "ComunicacionService";
      this.user$.next(user);
    }, 5000);
  }

  //***Los servicios NO tiene un lifecycle***

}
