import { ServiceProviderService } from './../../../@core/services/Provider/service-provider.service';
import { ClientService } from './../../../@core/services/client/client.service';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import moment from 'moment';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-payment-layout',
  templateUrl: './payment-layout.component.html',
  styleUrls: ['./payment-layout.component.scss'],
})
export class PaymentLayoutComponent implements OnInit {
  @Input() data: any = [];
  @Input() userType: any = '';
  @Input() complete:any= (args: any) => {};
  @Input() notComplete:any= (args: any) => {};
  @Input() inComplete:any= (args: any) => {};

  allPaidProjectArray: any = [];
  dataShow: any = [];
  showModal: boolean = false;
  location: any = '';
  activeProject: any = {};
  requiredWorks: any = [];
  activeworksName: any = [];
  activeMiliestones: any = [];
  constructor(private clientService: ClientService) {}
  @ViewChild('pdfTable', { static: false }) pdfTable!: ElementRef;
  downloadPDF() {
    var AmiriRegular = 'AAEAAAASAQ...';
    var doc = new jsPDF('p', 'pt', 'a4');

    doc.addFileToVFS('Amiri-Regular.ttf', AmiriRegular);
    doc.addFont('Amiri-Regular.ttf', 'Amiri', 'normal');

    doc.setFont('Amiri');
    doc.setFontSize(12);

    var testText = 'إذا لم تستح فاصنع ما شئت';

    doc.text(testText, 50, 50);

    doc.save('test.pdf');
  }
  ngOnInit(): void {
    console.log(this.dataShow);
  }
  showDetails = (project: any) => {
    console.log(project);
    this.showModal = true;
    this.activeProject = project;
    if (this.userType == 'client' || this.userType == 'sp') {
      this.activeMiliestones =
        this.activeProject.project?.offers[0]?.milestones;
    } else if (this.userType == 'spForAdmin') {
      this.activeMiliestones =
        this.activeProject.profile?.offers[0]?.milestones;
    } else if (this.userType == 'clientForAdmin') {
      this.activeMiliestones =
        this.activeProject.profile?.projects[0]?.offers[0]?.milestones;
    }
    console.log(this.activeProject);
    if (this.userType == 'client' || this.userType == 'sp') {
      project.project.offers[0].milestones.map((mile: any) => {
        if (mile.requiredWorkId) {
          this.getrequireWork(mile.requiredWorkId);
        }
      });
    } else if (this.userType == 'spForAdmin') {
      project.profile.offers[0].milestones.map((mile: any) => {
        if (mile.requiredWorkId) {
          this.getrequireWork(mile.requiredWorkId);
        }
      });
    } else if (this.userType == 'clientForAdmin') {
      project.profile.projects[0]?.offers[0].milestones.map((mile: any) => {
        if (mile.requiredWorkId) {
          this.getrequireWork(mile.requiredWorkId);
        }
      });
    }
  };
  search(word: any) {
    this.dataShow =[]
    if (this.userType == 'client' || this.userType == 'sp') {
      this.data.map((project: any) => {
        if (project.project?.name.search(new RegExp(word, 'i')) != -1) {
          this.dataShow.push(project);
        }
      });
      console.log(this.dataShow);
    } else if (this.userType == 'spForAdmin') {
      this.data.map((project: any) => {
        if (project.profile?.offers[0]?.project?.name.search(new RegExp(word, 'i')) != -1) {
          this.dataShow.push(project);
        }
      });

    } else if (this.userType == 'clientForAdmin') {
      this.data.map((project: any) => {
        if (project.profile?.projects[0]?.name.search(new RegExp(word, 'i')) != -1) {
          this.dataShow.push(project);
        }
      });
    }
    console.log(word);
    this.allPaidProjectArray = this.data;
    console.log(this.allPaidProjectArray);
 
  }
  sortByName() {
    if(this.userType=="sp" || this.userType=="client"){
      this.data.sort((a: any, b: any) =>
      a.project.name.localeCompare(b.project.name)
    );
    }else if (this.userType == 'spForAdmin') {
      this.data.sort((a: any, b: any) =>
      a.profile.offers[0].project.name.localeCompare(b.profile.offers[0].project.name)
    );
    } else if (this.userType == 'clientForAdmin') {
      this.data.sort((a: any, b: any) =>
      a.profile.projects[0].name.localeCompare(b.profile.projects[0].name)
    );
    }
  }
  sortByDate() {
  if(this.userType=="sp" || this.userType=="client"){
    this.data.map((pro: any) => {
      pro.project.dateCreated = new Date(pro.project.dateCreated);
    });
    this.data.sort((a: any, b: any) => {
      return b.project.dateCreated - a.project.dateCreated;
    });
  }else if (this.userType == 'spForAdmin') {
    this.data.map((pro: any) => {
      pro.profile.offers[0].project.dateCreated = new Date(pro.profile.offers[0].project.dateCreated);
    });
    this.data.sort((a: any, b: any) => {
      return b.profile.offers[0].project.dateCreated - a.profile.offers[0].project.dateCreated;
    });
  } else if (this.userType == 'clientForAdmin') {
    this.data.map((pro: any) => {
      pro.profile.projects[0].dateCreated = new Date( pro.profile.projects[0].dateCreated);
    });
    this.data.sort((a: any, b: any) => {
      return b.profile.projects[0].dateCreated - a.profile.projects[0].dateCreated;
    });
  }

  }
  getrequireWork(reqId: any) {
    this.clientService.getRequiredWorkByWorkId(reqId).subscribe((data: any) => {
      this.requiredWorks.push(...data.data);
    });
  }
  getrequireWorkName(requiredWorkId: any) {
    this.requiredWorks.map((work: any) => {
      console.log(work);
      console.log(work.name);
      if (work.id == requiredWorkId) {
        return work?.name;
      }
    });
  }

  getDate(date: any) {
    return moment(date).utc().format('YYYY-MM-DD');
  }
}