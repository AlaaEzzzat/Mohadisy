import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-rate',
  templateUrl: './carousel-rate.component.html',
  styleUrls: ['./carousel-rate.component.scss']
})
export class CarouselRateComponent implements OnInit {
@Input() testimonials :any=[];
  constructor() { }

  ngOnInit(): void {
  }

}
