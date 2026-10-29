import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleados } from '../../services/servicesEmpleados';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-perfil-component',
  standalone: false,
  styleUrl: './mi-perfil-component.css',
  templateUrl: './mi-perfil-component.html',
})
export class MiPerfilComponent implements OnInit {
  public empleado!: Empleado;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceEmpleados,
    private _router: Router,
  ) {}
  async ngOnInit(): Promise<void> {
      this.empleado = await this._service.getPerfilEmpleado();
      this._cdr.detectChanges();
  
  }
}
