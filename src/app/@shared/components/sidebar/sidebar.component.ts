import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() data = [
    {
    title:"لوحة التحكم ",
    routing:"/usermanagement/dashboard",
    image:"assets/images/Group.png"
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
