import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'jl-labelinput',
  templateUrl: './jl-labelinput.component.html',
  styleUrls: ['./jl-labelinput.component.css']
})
export class JlLabelinputComponent {
  @Input() id: string = 'jl-labelinput';
  @Input() tipo?: string = 'text';
  @Input() set valor(valor: string | Date | undefined) {
    if (valor) {
      this._valor = valor;
    } else {
      this._valor = '';
    }
  }
  public get valor(): string {
    if (this._valor instanceof Date) {
      return this._valor.toISOString().substring(0, 10);
    }

    return this._valor;
  }

  private _valor: string | Date = '';

  @Output() valorChange = new EventEmitter<string>();
  onValorChange(valor: string) {
    if(this.tipo === 'date') {
      this._valor = new Date(valor);
    }
    this.valorChange.emit(valor);
    this._valor = valor;
  }
}
