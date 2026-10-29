import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login-component';
import { MiSubordinadosComponent } from './components/mi-subordinados-component/mi-subordinados-component';
import { MiPerfilComponent } from './components/mi-perfil-component/mi-perfil-component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"perfil", component:MiPerfilComponent},
  {path: "subordinados" , component: MiSubordinadosComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
