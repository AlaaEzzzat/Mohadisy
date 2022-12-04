import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import moment from 'moment';
import { AdminDashService } from 'src/app/@core/services/admin/admin-dash.service';

@Component({
  selector: 'app-work-schedule',
  templateUrl: './work-schedule.component.html',
  styleUrls: ['./work-schedule.component.scss']
})
export class WorkScheduleComponent implements OnInit {
  FileformData = new FormData();
   file:any;
   iProfileAdmin: any | undefined = undefined;
   selected: any = new Date();
   appointment!:appoint;
   newappointment: FormGroup;
   dateOpt:any;
   erDateOp:any;


   appointmentFiles:any[]=[]

  constructor(private http: AdminDashService,private formbuilder: FormBuilder) { 
    this.newappointment=this.formbuilder.group({
      name: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(15),]],
     description: ['', [Validators.required]],
     imageFile: [null],
    });
  }

  ngOnInit() {
    this.getappointDate()

  }
  get name() {
    return this.newappointment?.get('name');
  }
  get description() {
    return this.newappointment?.get('description');
  }
  get appoins() {
    return this.newappointment.controls;
  }
  get imageFile(){
    return this.newappointment?.get('imageFile');
  }
  getappointDate() {
    let date=moment(this.selected).utc().format('YYYY-MM-DD h:mm A')
     let dateSelected={
       
         "startDate": date,
         "endDate": date
       } 
       console.log(dateSelected);
       this.http.appointmentsEndAndStartDte(dateSelected).subscribe({next:(date=>{
         console.log(date.data);
        
         for(let dates of date.data){
           this.dateOpt=dates
   
         }
         console.log(this.dateOpt)
         this.appointmentFiles=this.dateOpt.appointmentFiles
       }),error:(er=>{
         console.log(er)
         this.dateOpt=null
         this.erDateOp=er
       })})
     
   }
  uplaodFile(e: any) {

       
    if (e.target.files && e.target.files.length > 0) {
      let file = e.target.files[0];
      console.log(file);
      // let FileformData = new FormData();
      this.FileformData.append('file', file);
  }
 
  
  }



creatMeeting() {
  this.iProfileAdmin=localStorage.getItem('id')
  console.log(this.iProfileAdmin)
  let date=moment(this.selected).utc().format('YYYY-MMM-DD h:mm A');
  
    this.appointment={
      "applicationUserId": this.iProfileAdmin,
      "name": this.name?.value,
      "description": this.description?.value,
      "dateCreated": date
    }
    this.http.storeAppointment(this.appointment).subscribe({next:((data)=>{
      console.log(data.message);
      console.log(data.data.id);
      this.getappointDate() 
      this.http.storeAppointmentFiles(data.data.id,this.FileformData).subscribe({next:(req)=>{
        console.log(req)

      },error:(er)=>{
        console.log(er)

      }})
    }),error:(er)=>{
      console.log(er)
    }})
    console.log(this.appointment);
   
  }
}
interface appoint{
  "applicationUserId":string,
  "name": string,
  "description": string,
  "dateCreated": string
}