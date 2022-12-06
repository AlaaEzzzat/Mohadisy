import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
@Input() pro :any={};
@Input() userType :any=''
  constructor() { }

  ngOnInit(): void {
  }

}
