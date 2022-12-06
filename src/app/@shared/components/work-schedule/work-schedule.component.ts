import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import moment from 'moment';
import { AdminDashService } from 'src/app/@core/services/admin/admin-dash.service';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';

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
   message:any;
   showSuc:boolean=false
   showErr:boolean=false

   appointmentFiles:any[]=[]

  constructor(private http: AdminDashService,private formbuilder: FormBuilder, private _HttpClient: HttpClient,) { 
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
    let date=moment(this.selected).format('YYYY-MM-DD');
     let dateSelected={
       
         "startDate": date,
         "endDate": date
       } 
       console.log(dateSelected);
       this.http.appointmentsEndAndStartDte(dateSelected).subscribe({next:(date=>{
         console.log(this.selected);
        
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
  let date=moment(this.selected).format('YYYY-MM-DD');

    this.appointment={
      "applicationUserId": this.iProfileAdmin,
      "name": this.name?.value,
      "description": this.description?.value,
      "dateCreated": date
    }
    this.http.storeAppointment(this.appointment).subscribe({next:((data)=>{
     
      this.message=data.message
      this.showSuc=true

      setInterval(() => {
        this.showSuc=false
        }, 3000);
      this.getappointDate() 
      this.http.storeAppointmentFiles(data.data.id,this.FileformData).subscribe({next:(req)=>{
        console.log(req)
        this.message=req.message
        this.showSuc=true
  
        setInterval(() => {
          this.showSuc=false
          }, 4000);
          this.getappointDate() 
      },error:(er)=>{
        console.log(er)
        this.message=er.message
        this.showErr=true
  
        setInterval(() => {
          this.showErr=false
          }, 4000);

      }})
    }),error:(er)=>{
      console.log(er);
      this.message=er.message
      this.showErr=true

      setInterval(() => {
        this.showErr=false
        }, 4000);
    }})
    console.log(this.appointment);
   
  }
  download(url: string, name: any) {
    return this._HttpClient.get(url, { responseType: 'arraybuffer' }).subscribe(
      (png) => {
        const blob = new Blob([png], { type: 'application/pdf' });
        const fileName = name;
        saveAs(blob, fileName);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
interface appoint{
  "applicationUserId":string,
  "name": string,
  "description": string,
  "dateCreated": string
}