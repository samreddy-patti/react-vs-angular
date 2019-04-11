import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
  `
    <section>
      <div class="jumbotron text-center">
          <h1 class="text-info">Data binding demo</h1>
            <div class="form-group">
              <input class="form-control" placeholder="Enter your name" [value]="name" (input)='updateName(($event.target.value))'/>
            </div>
          </div>

      <div class="text-center">
        <h1>Hello {{name}}</h1>
      </div>
    </section>  
  `
})
export class AppComponent  {
  name:string = ''

  updateName(newName: string){
    this.name = newName;
  }
}
