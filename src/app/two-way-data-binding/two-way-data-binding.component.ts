import { Component } from '@angular/core';
@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent {
  nome = "flavio henrique";
  ativo = false;

  adicionar() {
    console.log(this.nome);
    this.nome = `O nome foi alterado`
  }
}
