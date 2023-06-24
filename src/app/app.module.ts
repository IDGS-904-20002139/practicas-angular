import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResistenciasComponent } from './resistencias/resistencias.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DistanciasModule } from './distancias-module/distancias.module';

@NgModule({
  declarations: [
    AppComponent,
    ResistenciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    DistanciasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
