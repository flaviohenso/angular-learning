import { Component } from '@angular/core';

@Component({
  selector: 'app-variable-referenci',
  templateUrl: './variable-referenci.component.html',
  styleUrls: ['./variable-referenci.component.css']
})
export class VariableReferenciComponent {

  nome = "Flavio H. S. Cabral"

  adicionar(nomeInput: any){
    console.log(`nome: ${nomeInput}`)
    this.nome = nomeInput;
  }
}
