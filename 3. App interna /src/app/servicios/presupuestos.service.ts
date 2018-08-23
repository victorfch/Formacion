import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs";
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {
  presURL='https://compras-app-c3c76.firebaseio.com/presupuestos.json';
  preURL='https://compras-app-c3c76.firebaseio.com/presupuestos';
  

  constructor(private http: HttpClient) { }

  addPresupuesto (presupuesto) {
    return this.http.post(this.presURL, presupuesto, httpOptions);
  }
  getPresupuestos(){
    return this.http.get(this.presURL);
  }

  getPresupuesto(id$){
    const url = `${this.preURL}/${id$}.json`;
    return this.http.get(url);
  }
  putPresupuesto(presupuesto:any, id$:string) {
    const url = `${this.preURL}/${id$}.json`;
    return this.http.put(url,presupuesto,httpOptions);
  }
  
}
