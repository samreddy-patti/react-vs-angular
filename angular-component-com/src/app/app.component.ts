import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
  `
    <section>
      <app-menu (onMenuSelection)='onMenuSelection($event)'> </app-menu>
      <app-body [page]='pageName'> </app-body>
    </section>
  `
})
export class AppComponent  {
 pageName: string;
 onMenuSelection(pageName: string){
   this.pageName = pageName;
 }
}
