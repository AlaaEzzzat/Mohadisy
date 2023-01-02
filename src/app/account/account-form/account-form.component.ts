import { PolicyComponent } from './../../@shared/components/policy/policy.component';
import { Component, OnInit ,Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {
@Input() type=''
@Input() f:any= (args: any) => {}
@Input() checkrole:any= (args: any) => {}
@Input() onSubmit:any= (args: any) => {}
@Input() Forms:any= (args: any) => {}
@Input()   newselect: string = '';
@Input()     userdata: any;
@Input()  categoriySelector: string = '';
public captchaResolved : boolean = false;

constructor(public dialog: MatDialog) {}
policyID:number=1;
  ngOnInit(): void {
  }
  checkCaptcha=(captchaResponse : any)=> {
    this.captchaResolved = (captchaResponse && captchaResponse.length > 0) ? true : false
}
openDialog(policy:any) {
  const dialogRef = this.dialog.open(PolicyComponent,{
    data: {
      policyID: policy,
    },
  });
  this.policyID=policy

  dialogRef.afterClosed().subscribe(result => {
  
  });
}
}
