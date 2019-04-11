import { Component } from '@angular/core';

interface ContactForm{
  name: string,
  maritalStatus: boolean,
  dependents?: Array<{ name:string }>
}

@Component({
  selector: 'my-app',
  template: 
  `
    <section class="jumbotron">
      <h1 class="text-info">Constrol statements demo</h1>
      <div class="form-group">
        <label for="name">Name</label>
          <input class="form-control" id="name" />
        </div>
        <div class="form-group form-check">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" (change)='maritalStatusChange($event)'/> Married
          </label>
      </div>

      <!-- Dependent view -->
      <ng-container *ngIf='contactFrom.maritalStatus'>
        <div class="form-group">
          <label for="dependentCount">No. of Dependents</label>
          <input type="number" min="0" class="form-control" id="dependentCount" (input)='updateCount($event)' />
          <div class="form-group" *ngFor="let dependent of contactFrom.dependents;index as i">
            <label for="dependent{{i+1}}">Dependent {{i+1}}</label>
            <input class="form-control" id="dependent{{i+1}}"/>
          </div>
        </div>
      </ng-container>
    </section>
  `
})
export class AppComponent  {
  contactFrom:ContactForm = {
    name: '',
    maritalStatus: false,
    dependents: []
  }

  maritalStatusChange = event => this.contactFrom.maritalStatus = event.target.checked;

  updateCount = event => {
    const value = parseInt(event.target.value,10);
    this.contactFrom.dependents = Array(value).fill({name:''});
  };
}


