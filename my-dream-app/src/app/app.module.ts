import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './hijo/hijo.component';
import { ComunicacionService } from './comunicacion.service';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ComunicacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
