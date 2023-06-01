import { Component, Input } from "@angular/core";

@Component({
    selector: 'jl-titulo',
    template: '<h1>{{titulo}}</h1>'
})
export class TituloComponent {
    @Input() titulo = 'Nuevo título';
}