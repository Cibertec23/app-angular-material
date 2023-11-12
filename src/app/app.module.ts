import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivasPipesComponent } from './ejemplos/directivas-pipes/directivas-pipes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmDemoComponent } from './ejemplos/am-demo/am-demo.component';
import { PrincipalComponent } from './ejemplos/principal/principal.component';
import { PaginaErrorComponent } from './ejemplos/pagina-error/pagina-error.component';
import { MaterialModule } from './angular-material/material/material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasPipesComponent,
    AmDemoComponent,
    PrincipalComponent,
    PaginaErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'principal', component: PrincipalComponent},
      {path: 'angularmaterial', component: AmDemoComponent},
      {path: 'directivas-pipes', component: DirectivasPipesComponent},
      {path: '', redirectTo:'principal', pathMatch: 'full'},
      {path: '**', component: PaginaErrorComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
