import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: 
  `
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <a class="navbar-brand" target="_blank" href="http://www.techsams.com/blog.html">
      Sam
      </a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#" (click)="selectMenu('home')">Home</a> 
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" (click)="selectMenu('about')">About</a> 
        </li>
      </ul>
    </nav>
  `
})
export class MenuComponent  {
  @Output() onMenuSelection = new EventEmitter<string>();
  selectMenu(menuOption){
    this.onMenuSelection.emit(menuOption);
  }
}
