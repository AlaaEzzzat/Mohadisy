import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PolicyComponent } from '../policy/policy.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  policyID:number=1;

  ngOnInit(): void {
  }
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
