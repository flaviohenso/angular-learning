import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { VariableReferenciComponent } from './variable-referenci/variable-referenci.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { DiretivasCondicionaisShowComponent } from './diretivas-condicionais-show/diretivas-condicionais-show.component';
import { DiretivaNgForComponent } from './diretiva-ng-for/diretiva-ng-for.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BemVindoComponent,
    EventBindingComponent,
    VariableReferenciComponent,
    TwoWayDataBindingComponent,
    DiretivasCondicionaisShowComponent,
    DiretivaNgForComponent,
    FuncionarioCardComponent,
    FuncionarioFormComponent,
    LifeCycleComponent,
    PropertyBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
