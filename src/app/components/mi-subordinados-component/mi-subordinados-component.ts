import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from '../../services/servicesEmpleados';
import { Empleado } from '../../models/empleado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-subordinados-component',
  standalone: false,
  styleUrl: './mi-subordinados-component.css',
  templateUrl: './mi-subordinados-component.html',
})
export class MiSubordinadosComponent implements OnInit {
  public empleados: Empleado[] = [];

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceEmpleados,
    private _router: Router,
  ) {}

  async ngOnInit(): Promise<void> {
      this.empleados = await this._service.getSubordinadosAsync();
      this._cdr.detectChanges();
  }
}
