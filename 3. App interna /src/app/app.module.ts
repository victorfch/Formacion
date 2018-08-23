import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


import { ProveedoresService } from './servicios/proveedores.service';
import { PresupuestosService } from './servicios/presupuestos.service';

import { AppComponent } from './app.component';
import { ProveedoresComponent } from './componentes/proveedor/proveedores/proveedores.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { AddproveeComponent } from './componentes/proveedor/addprovee/addprovee.component';
import { AddpresComponent } from './componentes/presupuestos/addpres/addpres.component';
import { PresupuestosComponent } from './componentes/presupuestos/presupuestos/presupuestos.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'proveedores', component: ProveedoresComponent},
  {path: 'addprovee', component: AddproveeComponent},
  {path: 'addpres', component: AddpresComponent},
  {path: 'presupuestos', component: PresupuestosComponent},
  {path: '**', component: InicioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    NavegacionComponent,
    AddproveeComponent,
    AddpresComponent,
    PresupuestosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProveedoresService,
    PresupuestosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
