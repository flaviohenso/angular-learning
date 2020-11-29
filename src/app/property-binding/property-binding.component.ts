import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  url: string = 'http://www.norteng.com.br';
  urlimage: string = 'http://lorempixel.com/400/200/sports/';

  constructor() { }

  ngOnInit(): void {
  }

}
