import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProveedoresComponent } from './componentes/proveedores/proveedores.component';

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
