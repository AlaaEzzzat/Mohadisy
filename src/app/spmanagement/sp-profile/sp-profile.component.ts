
import { CoreModule } from './../../@core/@core.module';
import { ProviderServiceService } from './../../@core/services/Provider/provider-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/@core/api.service';
import { ConsoleLogger } from '@microsoft/signalr/dist/esm/Utils';



@Component({
  selector: 'app-sp-profile',
  templateUrl: './sp-profile.component.html',
  styleUrls: ['./sp-profile.component.scss'],
})
export class SpProfileComponent implements OnInit {

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
  workFile:any;
  index:number=0;
  avgRate:number=0;
  copmpleteProfile:number=0;


  constructor(
    private provider: ProviderServiceService,
    private api: ApiService
  ) {
  }


  ngOnInit(): void {
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

        

        if(this.profile?.organizationalServiceProviderProfile?.companyRegisterationNumberFile!=null
          )
        {
          this.copmpleteProfile+=(100/5.0);

        }


        

        if(this.profile?.organizationalServiceProviderProfile?.companyRegisterationNumberFile!=null
          )
        {
          this.copmpleteProfile+=(100/5.0);

        }

      });

      this.api.get("https://app.mohandisy.com/api/ServiceProviderWork/getServiceProviderWorks").subscribe(data=>
      {
       // console.log(data);
        this.ServiceProviderWork=data.data;

      });

      this.api.get("https://app.mohandisy.com/api/Representative/getRepresentative").subscribe(data=>
      {
        this.representative=data.data;

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

}
