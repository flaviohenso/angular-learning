import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent{
  nome = "Flavio H. S. Cabral"

  adicionar(){
    console.log(`Adicinando ${this.nome}`)

    const numero = Math.round(Math.random() * 100);
    this.nome = 'Clique -> ' + numero
  }

  alterarNome(event){
    //console.log(event.target.value);
    this.nome = event.target.value
  }
}
