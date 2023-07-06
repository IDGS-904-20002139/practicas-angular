import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { ResistenciasComponent } from './resistencias/resistencias.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DistanciasModule } from './distancias-module/distancias.module';
import { CineModule } from './cine/cine.module';
import { MenuComponent } from './menu/menu.component';
import { PizzasComponent } from './pizzas/pizzas.component';


@NgModule({
  declarations: [
    AppComponent,
    ResistenciasComponent,
    MenuComponent,
    PizzasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DistanciasModule,
    CineModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
