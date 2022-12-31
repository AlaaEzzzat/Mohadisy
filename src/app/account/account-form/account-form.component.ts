import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {
@Input() type=''
@Input() f:any= (args: any) => {}
@Input() onSubmit:any= (args: any) => {}
@Input() Forms:any= (args: any) => {}
@Input()   newselect: string = '';
@Input()     userdata: any;
@Input()  categoriySelector: string = '';
public captchaResolved : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  checkCaptcha=(captchaResponse : any)=> {
    this.captchaResolved = (captchaResponse && captchaResponse.length > 0) ? true : false
}

}