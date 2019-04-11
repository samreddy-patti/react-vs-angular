import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  template: 
  `
    <section class="container pt-2">
      <div *ngIf='page;else info'>
        You are in {{page}} page
      </div>
      <ng-template #info>
        <h5>Welcome to demo. Select menu.</h5>
      </ng-template>
    </section>
  `
})
export class BodyComponent  {
  @Input() page;
}
