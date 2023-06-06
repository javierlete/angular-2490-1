import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TituloComponent } from './titulo.component';
import { JlPieComponent } from './jl-pie/jl-pie.component';
import { JlMenuComponent } from './jl-menu/jl-menu.component';
import { FormsModule } from '@angular/forms';
import { JlLabelinputComponent } from './jl-labelinput/jl-labelinput.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    JlPieComponent,
    JlMenuComponent,
    JlLabelinputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
