
import { CoreModule } from './../../@core/@core.module';
import { ProviderServiceService } from './../../@core/services/Provider/provider-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/@core/api.service';
import { ConsoleLogger } from '@microsoft/signalr/dist/esm/Utils';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import moment from 'moment';
import { AdminDashService } from 'src/app/@core/services/admin/admin-dash.service';


@Component({
  selector: 'app-sp-profile',
  templateUrl: './sp-profile.component.html',
  styleUrls: ['./sp-profile.component.scss'],
})
export class SpProfileComponent implements OnInit {

  FileformData = new FormData();
  file:any;
  iProfileAdmin: any | undefined = undefined;
  appointment!:appoint;
  newappointment: FormGroup;
  dateOpt:any;
  erDateOp:any;
  message:any;
  showSuc:boolean=false
  showErr:boolean=false

  appointmentFiles:any[]=[]
  selected: Date = new Date();
  profile:any;
  infoProject:Array<any>=[];
  ServiceProviderWork:any;
  representative:any;
  registeration:any=0;
  registeration1:any=0;
  registeration2:any=0;
  registeration3:any=0;
  registeration4:any=0;
  registeration5:any=0;
  workFile:any;
  index:number=0;
  avgRate:number=0;
  copmpleteProfile:number=0;


  constructor(
    private provider: ProviderServiceService,
    private api: ApiService,
    private _HttpClient: HttpClient,
    private formbuilder: FormBuilder,
    private http: AdminDashService
  ) {
    this.newappointment=this.formbuilder.group({
      name: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(15),]],
     description: ['', [Validators.required]],
     imageFile: [null],
    });
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

  ngOnInit(): void {
    this.getappointDate()
      this.api.get("https://app.mohandisy.com/api/OrganizationalServiceProvider/getProfile").subscribe(data=>
      {
        this.profile=data.data;
        console.log(this.profile);
        if(this.profile?.organizationalServiceProviderProfile?.licenseFile!=null)
        {
          this.copmpleteProfile+=(100/5.0);

        }

        if(this.profile?.organizationalServiceProviderProfile?.zakatCertificateFile!=null)
        {
          this.copmpleteProfile+=(100/5.0);

        }


        if(this.profile?.organizationalServiceProviderProfile?.companyRegisterationNumberFile!=null
          )
        {
          this.copmpleteProfile+=(100/5.0);

        }



        if(this.profile?.organizationalServiceProviderProfile?.socialInsuranceCertificateFile!=null
          )
        {
          this.copmpleteProfile+=(100/5.0);

        }




        if(this.profile?.organizationalServiceProviderProfile?.iBanFile!=null
          )
        {
          this.copmpleteProfile+=(100/5.0);

        }

      });

      this.api.get("https://app.mohandisy.com/api/ServiceProviderWork/getServiceProviderWorks").subscribe(data=>
      {
        console.log(data);
        this.ServiceProviderWork=data.data;

      });

      this.api.get("https://app.mohandisy.com/api/Representative/getRepresentative").subscribe(data=>
      {
        this.representative=data.data;

      });


        this.api.postJson("https://app.mohandisy.com/api/Appointment/getAppointments").subscribe(data=>
          {
            console.log(data);

          });


       this.api.get("https://app.mohandisy.com/api/Dashboard/getServiceProviderStatus").subscribe(data=>
        {
          var rate=data.data.testimonials;

         // console.log(rate);
          for(let i=0;i<rate.length;i++)
          {
           this.avgRate+=Number(rate[i].stars);

          }

          this.avgRate/=(rate.length);
        }
        );

  }




  projectImage(workId:any)
  {
    this.api.get(`https://app.mohandisy.com/api/ServiceProviderWork/getServiceProviderWorkFilesByWorkId/${workId}`).subscribe(data=>
    {
      this.workFile=data.data;

    });
  }



  toggle(projectId:number)
  {

    if(this.infoProject[projectId]!=1)
    this.infoProject[projectId]=1;
    else
    this.infoProject[projectId]=0;

  }



  register_1()
  {
    this.registeration1=!this.registeration1;
  }

  register_2()
  {
    this.registeration2=!this.registeration2;
  }

  register_3()
  {
    this.registeration3=!this.registeration3;

  }

  register_4()
  {
    this.registeration4=!this.registeration4;

  }

  register_5()
  {
    this.registeration5=!this.registeration5;

  }
  // جدول الاعمال

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