import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';

import {User} from './models/User';

@Injectable(/* {
  providedIn: 'root'
} */)
export class ComunicacionService {

  public user$: ReplaySubject<User> = new ReplaySubject(Infinity);

  constructor() { 
    setTimeout( () => {
      const user = new User();
      user.username = "ComunicacionService";
      this.user$.next(user);
    }, 6000);
  }

  //***Los servicios NO tiene un lifecycle***

}
