import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PolicyComponent } from '../policy/policy.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  countDownDate = new Date('jan 1, 2023 00:00:00').getTime();
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  secends: number = 0;
  x: any = '';



  policyID:number=1;

  constructor(public dialog: MatDialog) {}


  customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      margin:40,
      nav:false,
      dots: false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:2
          }
      }
  }
  ngOnInit(): void {
    this.x = setInterval(() => {
      let now = new Date().getTime();
      var distance = this.countDownDate - now;
      if (distance > 0) {
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.secends = Math.floor((distance % (1000 * 60)) / 1000);
      }
    });
  }
  one: boolean = true;
  two: boolean = false;
  three: boolean = false;

  openDialog(policy:any) {
    const dialogRef = this.dialog.open(PolicyComponent,{
      data: {
        policyID: policy,
      },
    });
    this.policyID=policy
    console.log(this.policyID)
    dialogRef.afterClosed().subscribe(result => {
    
    });
  }
}
