import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-variable-referenci',
  templateUrl: './variable-referenci.component.html',
  styleUrls: ['./variable-referenci.component.css']
})
export class VariableReferenciComponent {

  nome = 'flavio henrique';
  ativo = false;

  @Input() childItem: string;

  adicionar = (nomeInput: any) => {
    console.log(`nome: ${nomeInput}`);
    console.log(this.childItem);
    this.nome = nomeInput;
  }

  alterarNome = (event: any) => {
    console.log(event.target.value);
    this.nome = event.target.value;
  }
}
