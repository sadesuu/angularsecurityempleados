import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-ejemplo-signal-component',
  standalone: false,
  styleUrl: './ejemplo-signal-component.css',
  templateUrl: './ejemplo-signal-component.html',
})
export class EjemploSignalComponent {
  public contador = signal(0)

  public doble = computed(()=>{
    return this.contador() * 2
  })

  reiniciarContador():void{
    this.contador.set(0)
  }

  incrementarContador():void{
    this.contador.update(value => value + 1)
  }
}
