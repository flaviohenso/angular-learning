import { Component } from '@angular/core';
@Component({
  selector: 'app-diretivas-condicionais-show',
  templateUrl: './diretivas-condicionais-show.component.html',
  styleUrls: ['./diretivas-condicionais-show.component.css']
})
export class DiretivasCondicionaisShowComponent {
  nome = "flavio henrique";
  adicionado = false;

  adicionar() {
    console.log(this.nome);
    this.adicionado = true;
  }
}
