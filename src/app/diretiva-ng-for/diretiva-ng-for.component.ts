import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-for',
  templateUrl: './diretiva-ng-for.component.html',
  styleUrls: ['./diretiva-ng-for.component.css']
})
export class DiretivaNgForComponent {

  funcionarios = [];
  ultimo: number = 0;

  nome = "";
  adicionado = false;

  adicionar() {

    console.log(this.funcionarios)
    //console.log(this.nome);
    this.adicionado = true;

    this.funcionarios.push({
      id: ++this.ultimo,
      nome: this.nome
    });
  }

}
