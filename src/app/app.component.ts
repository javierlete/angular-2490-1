import { Component } from '@angular/core';
import { OpcionMenu } from './opcion-menu';
import { Login } from './login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Mi título';
  
  opcionesMenu: OpcionMenu[] = [
    { titulo: 'Principal', ruta: '/' },
    { titulo: 'Acerca de', ruta: '/acercade' }
  ];

  loginForm: Login = {
    email: 'email@inicial.net',
    password: 'contraseña inicial'
  };

  onLoginClick() {
    alert(this.loginForm.email + ", " + this.loginForm.password);
  }
  onLoginVariablesClick(email: string, password: string) {
    this.loginForm = { email, password };
  }
}
