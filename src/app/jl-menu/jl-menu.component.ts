import { Component, Input } from '@angular/core';
import { OpcionMenu } from '../opcion-menu';

@Component({
  selector: 'jl-menu',
  templateUrl: './jl-menu.component.html',
  styleUrls: ['./jl-menu.component.css']
})
export class JlMenuComponent {
  @Input() menu: OpcionMenu[] = [];
}
