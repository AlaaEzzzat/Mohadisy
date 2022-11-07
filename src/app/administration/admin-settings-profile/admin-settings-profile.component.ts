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
  selector: 'app-admin-settings-profile',
  templateUrl: './admin-settings-profile.component.html',
  styleUrls: ['./admin-settings-profile.component.scss']
})
export class AdminSettingsProfileComponent implements OnInit {
  userformlogin :FormGroup;
  iProfileAdmin :any|undefined=undefined;
  state :any=0
  profileChange:admin={} as admin;
  constructor(private adminSettingsService:AdminSettingsService,private formbuilder:FormBuilder) {
     this.userformlogin=this.formbuilder.group({
    lastName:['',[Validators.required]],
    firstName:['',[Validators.required]],
  });}

  ngOnInit(): void {
    this.adminSettingsService.getAdminProfile().subscribe((value) => {
      this.state= localStorage.getItem("STATE")
      this.iProfileAdmin= value.data





   });
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

}
