import { Component, OnInit } from '@angular/core';
import { switchAll } from 'rxjs';
import { AdminClientsService } from 'src/app/@core/services/admin/admin-clients.service';
import { IadminClients } from 'src/app/@models/iadmin-clients';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Data } from '@angular/router';

interface admin{


    firstName : string,


}
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  selected?: Data |null
  

  constructor(  ) {
    
 }

  ngOnInit(): void {

 
  }
  
   


}

