import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  //styleUrls: ['./funcionario-card.component.css']
  styles: [`
    .card {
      text-transform: uppercase;
      color: blue;
    }
  `]
})
export class FuncionarioCardComponent {

  @Input() indice: any;
  @Input() funcionario: any;

  getEstilosCartao = () => { 
    return { 
      backgroundColor: this.indice % 2 === 0 ? 'lightblue' : 'lightgreen',
      borderWidth: this.indice+'px'
    }
  }

  getStyleClass = () => { 
    return ['badge', 'badge-secondary']
  }

  isAdmin = () => {
    return this.funcionario.nome.startsWith('F');
  }
  
}
