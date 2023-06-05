import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TituloComponent } from './titulo.component';
import { JlPieComponent } from './jl-pie/jl-pie.component';
import { JlMenuComponent } from './jl-menu/jl-menu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    JlPieComponent,
    JlMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
