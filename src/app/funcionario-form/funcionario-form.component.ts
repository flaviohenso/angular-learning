import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {

  // Defini que é um evento de sáida para o componente pai
  @Output() funcionarios = new EventEmitter();
  ultimo = 0;

  nome = '';
  adicionado = false;

  // esse método é ultilizado pelo componente para dispara o evento de saida dos dados
  adicionar = () => {
    // console.log(this.nome);
    this.adicionado = true;

    const funcionario = {
      id: ++this.ultimo,
      nome: this.nome
    };
    this.funcionarios.emit(funcionario);
  }
}
