import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProveedoresComponent } from './componentes/proveedor/proveedores/proveedores.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { AddproveeComponent } from './componentes/proveedor/addprovee/addprovee.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'proveedores', component: ProveedoresComponent},
  {path: 'addprovee', component: AddproveeComponent},
  {path: '**', component: InicioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    NavegacionComponent,
    AddproveeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
