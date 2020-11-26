import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meuprojeto';
  idade = 10;

  getidade(){
    return 10 + 30;
  }
}
