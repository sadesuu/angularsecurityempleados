import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleados } from '../../services/servicesEmpleados';

@Component({
  selector: 'app-mi-perfil-component',
  standalone: false,
  styleUrl: './mi-perfil-component.css',
  templateUrl: './mi-perfil-component.html',
})
export class MiPerfilComponent implements OnInit{
  public empleado!: Empleado;
  public mensaje = '';
  public cargando = true;

  constructor(
    private _cdr:ChangeDetectorRef,
    private _service: ServiceEmpleados
  ){}

  async ngOnInit(): Promise<void> {
    try {
      this.empleado = await this._service.getPerfilEmpleado();
    } catch (error) {
      this.mensaje = 'No se pudo cargar la información del perfil.';
      console.error('Error al cargar el perfil:', error);
    } finally {
      this.cargando = false;
      this._cdr.detectChanges();
    }
  }


}
