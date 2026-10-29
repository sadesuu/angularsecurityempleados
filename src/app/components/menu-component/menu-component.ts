import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  constructor(private readonly router: Router) {}

  logout(): void {
    sessionStorage.removeItem('TOKEN');
    this.router.navigate(['/']);
  }
}
