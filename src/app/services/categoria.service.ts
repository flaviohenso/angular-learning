import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor() { }


  getCursos = () => {
    return [ 'Angular', 'Java', 'React'];
  }
}
