import { Component } from '@angular/core';

@Component({
    selector: 'hello',
    template: `
    <h1> Olá {{nome}}</h1>
    `
})

export class HelloComponent {
     nome = 'Flavio';
}