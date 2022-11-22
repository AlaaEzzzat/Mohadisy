import { ClientService } from './../../@core/services/client/client.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component,ViewChild,ElementRef, OnInit } from '@angular/core';
import moment from 'moment';
/* import {jsPDF} from 'jspdf'; */
import jsPDF from 'jspdf';
/* import * as html2pdf from 'html2pdf.js' */
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  

  allPaidProjectArray: any = [];
  dataShow: any = [];
  showModal: boolean = false;
  location: any = '';
  activeProject: any = {};
  requiredWorks: any = [];
  activeworksName: any = [];
  constructor(
    private router: Router,
    private _toastr: ToastrService,
    private clientService: ClientService
  ) {}

  
 @ViewChild('pdfTable', { static: false }) pdfTable!: ElementRef;
 /* downloadAsPDF () {
      let pdf = new jsPDF();
      pdf.html(this.pdfTable.nativeElement, {
      callback: (pdf) => {
          pdf.save('sample.pdf');
        },
      });
    } */
   /*  public downloadPDF() {
    const doc = new jsPDF();
    const content = this.pdfTable.nativeElement;
    doc.html(content.innerHTML);
    doc.save('test.pdf');
  } */
  downloadPDF() {
    var AmiriRegular = "AAEAAAASAQ..."
            var doc = new jsPDF("p", "pt", "a4");

            doc.addFileToVFS("Amiri-Regular.ttf", AmiriRegular);
            doc.addFont('Amiri-Regular.ttf', 'Amiri', 'normal');

            doc.setFont('Amiri'); // set font
            doc.setFontSize(12);

            var testText = "إذا لم تستح فاصنع ما شئت test@test.nl إذا لم تستح فاصنع ما شئت";

            doc.text(testText, 50, 50);

            doc.save("test.pdf");
  }
  ngOnInit(): void {
    this.clientService.getPaymentsForClient().subscribe((data) => {
      this.allPaidProjectArray = data.data;
      this.dataShow = this.allPaidProjectArray;
      console.log(this.allPaidProjectArray);
    });
  }
  showDetails(project: any) {
    this.showModal = true;
    this.activeProject = project;
    project.project.offers[0].milestones.map((mile: any) => {
      if (mile.requiredWorkId) {
        this.getrequireWork(mile.requiredWorkId);
      } 
    });
  }
  search(word: any) {
    console.log(word);
    this.dataShow = [];
    this.allPaidProjectArray.map((project: any) => {
      if (project.project.name.search(new RegExp(word, 'i')) != -1) {
        this.dataShow.push(project);
      }
    });
  }
  getLocation(districtId: any) {}
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
 /*  downloadPdf(){
    var element = document.getElementById('table');
var opt = {
  margin:       1,
  filename:     'output.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 2 },
  jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
};
 
/* html2pdf().from(element).set(opt).save(); */

}
