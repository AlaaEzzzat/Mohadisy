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
  @Input() data: any;
  @Input() userType: any = '';
  allPaidProjectArray: any = [];
  dataShow: any;
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

    var testText =
      'إذا لم تستح فاصنع ما شئت';

    doc.text(testText, 50, 50);

    doc.save('test.pdf');
  }
  ngOnInit(): void {}
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
    console.log(word);
    this.dataShow = [];
    this.allPaidProjectArray.map((project: any) => {
      if (project.project.name.search(new RegExp(word, 'i')) != -1) {
        this.dataShow.push(project);
      }
    });
  }
  sortByName() {
    this.dataShow.sort((a: any, b: any) =>
      a.project.name.localeCompare(b.project.name)
    );
  }
  sortByDate() {
    this.dataShow.map((pro: any) => {
      pro.project.dateCreated = new Date(pro.project.dateCreated);
    });
    this.dataShow.sort((a: any, b: any) => {
      return b.project.dateCreated - a.project.dateCreated;
    });
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
