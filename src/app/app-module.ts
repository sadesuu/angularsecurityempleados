import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login-component';
import { MiPerfilComponent } from './components/mi-perfil-component/mi-perfil-component';
import { MiSubordinadosComponent } from './components/mi-subordinados-component/mi-subordinados-component';
import { provideHttpClient } from '@angular/common/http';
import { ServiceEmpleados } from './services/servicesEmpleados';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    MiPerfilComponent,
    MiSubordinadosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ServiceEmpleados],
  bootstrap: [App],
})
export class AppModule {}
