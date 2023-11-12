import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivasPipesComponent } from './ejemplos/directivas-pipes/directivas-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasPipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
