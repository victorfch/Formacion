import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PresupuestosService } from '../../../servicios/presupuestos.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-editpres',
  templateUrl: './editpres.component.html',
  styleUrls: ['./editpres.component.css']
})
export class EditpresComponent implements OnInit {
  presupuestoForm: FormGroup;
  presupuesto: any;
  base: any;
  tipo: any;
  iva: any = 0;
  total: any = 0;
  id: string;

  constructor(private pf: FormBuilder,
    private _presupuestoService: PresupuestosService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.activatedRoute.params.subscribe(parametros => {
        this.id = parametros['id'];
        this._presupuestoService.getPresupuesto(this.id)
          .subscribe(presupuesto => this.presupuesto = presupuesto)
      });
    }

  onChanges() {
    this.presupuestoForm.valueChanges.subscribe(valor => {
      this.base = valor.base;
      this.tipo = valor.tipo;
      this.presupuestoForm.value.iva = this.base * this.tipo;
      this.presupuestoForm.value.total = this.base + (this.base * this.tipo);
    });

  }

  ngOnInit() {
    this.presupuestoForm = this.pf.group({
      proveedor: ['', Validators.required],
      fecha: ['', Validators.required],
      concepto: ['', [Validators.required, Validators.minLength(10)]],
      base: ['', Validators.required],
      tipo: ['', Validators.required],
      iva: [this.iva, Validators.required],
      total: [this.total, Validators.required]
    });
    this.onChanges();
  }

  savePresupuesto() {
    const savePresupuesto = {
      proveedor: this.presupuestoForm.get('proveedor').value,
      fecha: this.presupuestoForm.get('fecha').value,
      concepto: this.presupuestoForm.get('concepto').value,
      base: this.presupuestoForm.get('base').value,
      tipo: this.presupuestoForm.get('tipo').value,
      iva: this.presupuestoForm.get('iva').value,
      total: this.presupuestoForm.get('total').value
    }
    return savePresupuesto;
  }

  onSubmit() {
    this.presupuesto = this.savePresupuesto();
    this._presupuestoService.putPresupuesto(this.presupuesto, this.id).subscribe();
    this.presupuestoForm.reset();
  }

}
