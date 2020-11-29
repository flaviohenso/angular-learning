import { Component } from '@angular/core';

import { CategoriaService } from './../services/categoria.service';


@Component({
    selector: 'hello',
    template: `
    <h1> Olá {{nome}}</h1>
    <ul>
        <li *ngFor="let curso of cursos">
        {{curso}}
        </li>
    </ul>
    `
})

export class HelloComponent {
     nome = 'Flavio';
     cursos;
     constructor(categoriaServie: CategoriaService){
        this.cursos = categoriaServie.getCursos();
     }
}
