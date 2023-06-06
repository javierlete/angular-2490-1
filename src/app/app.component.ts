import { Component } from '@angular/core';
import { OpcionMenu } from './opcion-menu';
import { Usuario } from './usuario';

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

  usuarioForm: Usuario = {
    email: 'email@inicial.net',
    password: 'contraseña inicial',
    nombre: 'nombre inicial',
    apellido: 'apellido inicial',
    nacimiento: new Date()
  };

  onLoginClick() {
    alert(this.usuarioForm.email + ", " + this.usuarioForm.password);
    this.usuarioForm = { email: '', password: '' };
  }
  onLoginVariablesClick(email: string, password: string) {
    this.usuarioForm = { email, password };
  }
}
