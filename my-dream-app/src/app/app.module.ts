import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './hijo/hijo.component';
import { ComunicacionService } from './comunicacion.service';
import { UserComponent } from './user/user.component';
import { OferingComponent } from './ofering/ofering.component';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    UserComponent,
    OferingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ComunicacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
