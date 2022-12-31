import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [``],
})
export class AppComponent implements OnInit {
  constructor (
    public router: Router
  ) { }
  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((e: any) => e instanceof RoutesRecognized),
        pairwise()
      )
      .subscribe((e: any) => {
        console.log(e[0].urlAfterRedirects); 
        localStorage.setItem('router', e[0].urlAfterRedirects);      });
  }
}
