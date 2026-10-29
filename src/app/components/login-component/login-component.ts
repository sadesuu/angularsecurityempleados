import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { Login } from '../../models/login';
import { ServiceEmpleados } from '../../services/servicesEmpleados';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  @ViewChild('cajauser') cajaUser!: ElementRef<HTMLInputElement>;
  @ViewChild('cajapassword') cajaPassword!: ElementRef<HTMLInputElement>;

  public mensaje = '';

  constructor(private readonly service: ServiceEmpleados, private _cdr: ChangeDetectorRef, private _router: Router) {}

  async logInEmpleado(): Promise<void> {
    const userName = this.cajaUser.nativeElement.value;
    const password = this.cajaPassword.nativeElement.value;
    let response = await this.service.loginEmpleado(new Login(userName, password));
    this.mensaje = response.response;
    sessionStorage.setItem('TOKEN', response.response);
    this._cdr.detectChanges()
    this._router.navigate(['/perfil'])
  }
}
