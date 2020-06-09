import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import {User} from './models/User';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  public user$: Subject<User> = new Subject();

  constructor() { }

}
