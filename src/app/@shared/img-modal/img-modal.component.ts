import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-img-modal',
  templateUrl: './img-modal.component.html',
  styleUrls: ['./img-modal.component.scss']
})
export class ImgModalComponent implements OnInit {
  @Input() modalSrc: any = '';
  @Input() toggle :any= (args: any) => {}
  showModal: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
