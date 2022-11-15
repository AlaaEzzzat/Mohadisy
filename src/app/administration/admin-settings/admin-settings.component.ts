import { Component, OnInit } from '@angular/core';
import { AdminSettingsService } from './../../@core/services/admin/admin-settings.service';
import { IprofileAdmin } from './../../@models/iprofile-admin';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
 interface admin{
  adminProfile:{
    id : number,
    applicationUserId : string,
    firstName : string,
    lastName : string,
  }

}

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.scss']
})

export class AdminSettingsComponent implements OnInit {
  userformlogin :FormGroup;
  iProfileAdmin :any|undefined=undefined;
  state :any=0
  profileChange:admin={} as admin;
  datas:any;
  usersActive:any[]=[]
  constructor(private adminSettingsService:AdminSettingsService,private formbuilder:FormBuilder) {
    this.userformlogin=this.formbuilder.group({
      lastName:['',[Validators.required]],
      firstName:['',[Validators.required]],
    });
  }


  ngOnInit(): void {
    // this.newApi=1;
  

}
getProfileAdmin(){
  this.state=1
  this.adminSettingsService.getAdminProfile().subscribe((value) => {
    this.iProfileAdmin= value.data
    console.log(this.iProfileAdmin)
 });
}
get lastName(){
  return this.userformlogin?.get('lastName');
}
get firstName(){
  return this.userformlogin?.get('lastName');
}
updateAdminProfile(){

  this.profileChange={
    adminProfile:{
        id: this.iProfileAdmin.adminProfile.id,
    applicationUserId:this.iProfileAdmin.adminProfile.applicationUserId,
    firstName :this.firstName?.value,
    lastName:  this.lastName?.value,
    }


  }
  this.adminSettingsService.updateAdminProfile( this.profileChange.adminProfile).subscribe((data)=>{
    alert(`${data.message}`);
  })
  this.getProfileAdmin()

}

changeAndGetClint(){
  this.state=3
  this.adminSettingsService.getActiveUsers().subscribe({
    next:((data)=>{
      console.log(data.data.activeUsers)
      this.usersActive=data.data.activeUsers
      
    })
  })

}
changeFirstOrLastName(){
  this.state=2

   //  id:this.state.id,
   //  applicationUserId:this.state.applicationUserId,

}

}
