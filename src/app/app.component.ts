import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="main">
      <!-- <h1>Welcome in Angular 13 simple Base Structure...</h1>
        <h1>☺</h1> -->
      
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [``],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}

