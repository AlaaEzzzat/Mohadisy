import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import moment from 'moment';
import { AdminDashService } from 'src/app/@core/services/admin/admin-dash.service';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-work-schedule',
  templateUrl: './work-schedule.component.html',
  styleUrls: ['./work-schedule.component.scss'],
})
export class WorkScheduleComponent implements OnInit {
  FileformData = new FormData();
  file: any;
  iProfileAdmin: any | undefined = undefined;
  selected: any = new Date();
  appointment!: appoint;
  newappointment: FormGroup;
  dateOpt: any;
  dateOptAll: any[]=[]
  modalContent = false;

  erDateOp: any;
  message: any;
  showSuc: boolean = false;
  showErr: boolean = false;

  appointmentFiles: any[] = [];

  constructor(
    private _toastr: ToastrService,
    private http: AdminDashService,
    private formbuilder: FormBuilder,
    private _HttpClient: HttpClient
  ) {
    this.newappointment = this.formbuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],
      description: ['', [Validators.required]],
      imageFile: [null],
    });
  }

  ngOnInit() {
    // yesterday
    // this.isDateBeforeToday(new Date()); // => true

// today
    this.getappointDate();
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
  get imageFile() {
    return this.newappointment?.get('imageFile');
  }
  getappointDate() {
    let date = moment(this.selected).format('YYYY-MM-DD');
    let dateSelected = {
      startDate: date,
      endDate: date,
    };
    this.http.appointmentsEndAndStartDte(dateSelected).subscribe({
      next: (date) => {
        console.log(date.data);
        this.dateOptAll = date.data        ;
        for (let dates of date.data) {
          this.dateOpt = dates;
        }

        // this.appointmentFiles = this.dateOpt.appointmentFiles;
      },
      error: (er) => {
        console.log(er);
        this.dateOpt = null;
        this.erDateOp = er;
      },
    });
  }
  uplaodFile(e: any) {
    if (e.target.files && e.target.files.length > 0) {
      let file = e.target.files[0];
      this.FileformData.append('file', file);
    }
  }
   isDateBeforeToday=()=> {
    const today = new Date();

    today.setHours(0, 0, 0, 0);
    if( this.selected < today){
     
      this.message = "من فضلك اختار تاريخ بعد او نفس تاريخ اليوم"
      this._toastr.error(this.message);
      this.modalContent = false;

     

    }else{
      this.modalContent = true;


    }
}

  creatMeeting() {


      this.iProfileAdmin = localStorage.getItem('id');
      let date = moment(this.selected).format('YYYY-MM-DD');
      this.appointment = {
        applicationUserId: this.iProfileAdmin,
        name: this.name?.value,
        description: this.description?.value,
        dateCreated: date,
      };
      this.http.storeAppointment(this.appointment).subscribe({
        next: (data) => {
          this.message = data.message;
          this._toastr.info(data.message);
       
          this.getappointDate();
          this.http
            .storeAppointmentFiles(data.data.id, this.FileformData)
            .subscribe({
              next: (req) => {
                this.message = req.message;
                this._toastr.info(data.message);

                this.getappointDate();
                this.closeModal()
              },
              error: (er) => {
                this._toastr.error(er.message);
                this.closeModal()

              },
            });
        },
        error: (er) => {
          this._toastr.error(er.message);

       
        },
      });
      
    
    
  }

  deleteDate(id:any){
    this.http.deleteAppointment(id).subscribe({
      next:(data)=>{
        this._toastr.info(data.message);
        this.getappointDate()
      },error:(er)=>{
        this._toastr.info(er.message)

      }
    })
  }
  download2(url: string, name: any) {
    return this._HttpClient.get(url, { responseType: 'arraybuffer' }).subscribe(
      (png) => {
        const blob = new Blob([png], { type: 'application/pdf' });
        const fileName = name;
        saveAs(blob, fileName);
      },
      (err) => {
        this._toastr.error(err.message);

      }
    );
  }


  // openSortingModal(){
  //   this.modalContent = true;
  //   console.log('clicked')
   
  // }
  closeModal=()=>{
    this.modalContent = false;
   }
}

interface appoint {
  applicationUserId: string;
  name: string;
  description: string;
  dateCreated: string;
}
