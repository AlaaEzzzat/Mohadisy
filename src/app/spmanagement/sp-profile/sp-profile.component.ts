import { ServiceProviderService } from './../../@core/services/Provider/service-provider.service';
import { ClientService } from './../../@core/services/client/client.service';
import { ProviderServiceService } from './../../@core/services/Provider/provider-service.service';
import { Component, OnInit, Renderer2 } from '@angular/core';

import { ApiService } from 'src/app/@core/api.service';

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
  papers: any = [
    { id: 1, name: 'IBan', title: '   خطاب بنكى برقم الايبان', value: '' },
    {
      id: 2,
      name: 'ZakatCertificate',
      title: ' شهاده الزكاه والدخل',
      value: '',
    },
    { id: 3, name: 'registeration3', title: '  السجل التجارى', value: '' },
    { id: 4, name: 'ProfessionLicense', title: ' الرخصه', value: '' },
    {
      id: 5,
      name: 'SocialInsuranceCertificate',
      title: 'شهاده التأمينات الاجتماعيه',
      value: '',
    },
    {
      id: 6,
      name: 'SaudizationCertificate',
      title: 'المؤهل السعودي',
      value: '',
    },
  ];
  overview: any = [
    { id: 1 },
    { id: 2, title: 'الخدمه الرئيسيه' },
    { id: 3, title: 'الخدمه الفرعية' },
  ];
  IBan: any = '';
  ZakatCertificate: any = '';
  ProfessionLicense: any = '';
  SocialInsuranceCertificate: any = '';
  SaudizationCertificate: any = '';
  IBanName: any = '';
  ZakatCertificateName: any = '';
  ProfessionLicenseName: any = '';
  SocialInsuranceCertificateName: any = '';
  SaudizationCertificateName: any = '';

  FileformData = new FormData();
  file: any;
  iProfileAdmin: any | undefined = undefined;
  dateOpt: any;
  erDateOp: any;
  message: any;
  showSuc: boolean = false;
  showErr: boolean = false;
  appointmentFiles: any[] = [];
  selected: Date = new Date();
  profile: any;
  infoProject: Array<any> = [];
  ServiceProviderWork: any;
  representative: any;
  workFile: any;
  index: number = 0;
  avgRate: number = 0;
  copmpleteProfile: number = 0;
  editOverview: boolean = false;
  userImgChanged: boolean = false;
  userImg: any = '';
  editName: boolean = false;
  name: any = '';
  email: any = '';
  phoneNumber: any = '';
  map: string = 'https://www.google.com/maps/place/';
  location: any = '';
  projectServiceEdit: boolean = false;
  projectService: any = null;
  projectSubServiceEdit: boolean = false;
  projectSubService: any = null;
  constructor(
    private renderer: Renderer2,
    private api: ApiService,
    private _HttpClient: HttpClient,
    private http: AdminDashService,
    private clientService: ClientService,
    private provider: ServiceProviderService
  ) {}

  ngOnInit(): void {
    this.getappointDate();
    this.api
      .get(
        'https://app.mohandisy.com/api/OrganizationalServiceProvider/getProfile'
      )
      .subscribe((data) => {
        this.profile = data.data;
        console.log(this.profile);
        this.name =
          this.profile?.organizationalServiceProviderProfile?.companyName;
        this.phoneNumber = this.profile.phoneNumber;
        this.email = this.profile.email;
        this.location =
          this.profile.organizationalServiceProviderProfile?.district?.nameAr +
          '+' +
          this.profile.organizationalServiceProviderProfile?.district?.city
            ?.region?.nameAr;
        this.projectService =
          this.profile?.organizationalServiceProviderProfile?.projectService?.name;
        this.projectSubService =
          this.profile?.organizationalServiceProviderProfile?.ospprofileSubServices[0]?.projectSubService.name;

        this.IBan = this.profile.organizationalServiceProviderProfile?.iBanPath;
        this.IBanName =
          this.profile.organizationalServiceProviderProfile?.iBanFile;
        this.ZakatCertificate =
          this.profile.organizationalServiceProviderProfile?.zakatCertificatePath;
        this.ZakatCertificateName =
          this.profile.organizationalServiceProviderProfile?.zakatCertificateFile;
        this.ProfessionLicense =
          this.profile.organizationalServiceProviderProfile?.professionLicensePath;
        this.ProfessionLicenseName =
          this.profile.organizationalServiceProviderProfile?.professionLicenseFile;
        this.SaudizationCertificate =
          this.profile.organizationalServiceProviderProfile?.saudizationCertificatePath;
        this.SaudizationCertificateName =
          this.profile.organizationalServiceProviderProfile?.saudizationCertificateFile;
        this.SocialInsuranceCertificate =
          this.profile.organizationalServiceProviderProfile?.socialInsuranceCertificatePath;
        this.SocialInsuranceCertificateName =
          this.profile.organizationalServiceProviderProfile?.socialInsuranceCertificateFile;

        if (
          this.profile?.organizationalServiceProviderProfile?.licenseFile !=
          null
        ) {
          this.copmpleteProfile += 100 / 5.0;
        }

        if (
          this.profile?.organizationalServiceProviderProfile
            ?.zakatCertificateFile != null
        ) {
          this.copmpleteProfile += 100 / 5.0;
        }

        if (
          this.profile?.organizationalServiceProviderProfile
            ?.companyRegisterationNumberFile != null
        ) {
          this.copmpleteProfile += 100 / 5.0;
        }

        if (
          this.profile?.organizationalServiceProviderProfile
            ?.socialInsuranceCertificateFile != null
        ) {
          this.copmpleteProfile += 100 / 5.0;
        }

        if (
          this.profile?.organizationalServiceProviderProfile?.iBanFile != null
        ) {
          this.copmpleteProfile += 100 / 5.0;
        }
      });

    this.api
      .get(
        'https://app.mohandisy.com/api/ServiceProviderWork/getServiceProviderWorks'
      )
      .subscribe((data) => {
        console.log(data);
        this.ServiceProviderWork = data.data;
      });

    this.api
      .get('https://app.mohandisy.com/api/Representative/getRepresentative')
      .subscribe((data) => {
        this.representative = data.data;
      });

    this.api
      .get('https://app.mohandisy.com/api/Dashboard/getServiceProviderStatus')
      .subscribe((data) => {
        var rate = data.data.testimonials;

        // console.log(rate);
        for (let i = 0; i < rate.length; i++) {
          this.avgRate += Number(rate[i].stars);
        }

        this.avgRate /= rate.length;
      });
  }

  projectImage(workId: any) {
    this.api
      .get(
        `https://app.mohandisy.com/api/ServiceProviderWork/getServiceProviderWorkFilesByWorkId/${workId}`
      )
      .subscribe((data) => {
        this.workFile = data.data;
      });
  }

  toggle(projectId: number) {
    if (this.infoProject[projectId] != 1) this.infoProject[projectId] = 1;
    else this.infoProject[projectId] = 0;
  }

  getappointDate() {
    let date = moment(this.selected).format('YYYY-MM-DD');
    let dateSelected = {
      startDate: date,
      endDate: date,
    };
    console.log(dateSelected);
    this.http.appointmentsEndAndStartDte(dateSelected).subscribe({
      next: (date) => {
        console.log(this.selected);

        for (let dates of date.data) {
          this.dateOpt = dates;
        }
        console.log(this.dateOpt);
        this.appointmentFiles = this.dateOpt.appointmentFiles;
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
      console.log(file);
      // let FileformData = new FormData();
      this.FileformData.append('file', file);
    }
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
  focusMyInput(id: any) {
    this.renderer.selectRootElement(id).focus();
  }
  idPicChanged: boolean = false;
  idImgeUrl: any = '';
  imagesArray: any = [];
  uplaodImg(e: any, name: any) {
    let reader = new FileReader();
    if (e.target.files && e.target.files.length > 0) {
      let file = e.target.files[0];
      console.log(file);
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (name == 'profileImage') {
          this.userImg = reader.result;
          this.imagesArray.push({
            name: 'profileImage',
            file: file,
          });
          this.userImgChanged = true;
        }
      };
    }
  }
  fileMessage: any = '';
  filesUploadedArray: any = [];
  onFileUpload(event: any, name: any) {
    if (event.target.files.length > 0) {
      const myfile = event.target.files[0];
      this.filesUploadedArray.push({ name: name, file: myfile });
      name == 'IBan'
        ? (this.IBanName = myfile.name)
        : name == 'ZakatCertificate'
        ? (this.ZakatCertificateName = myfile.name)
        : name == 'ProfessionLicense'
        ? (this.ProfessionLicenseName = myfile.name)
        : name == 'SocialInsuranceCertificate'
        ? (this.SocialInsuranceCertificateName = myfile.name)
        : name == 'SaudizationCertificate'
        ? (this.SaudizationCertificateName = myfile.name)
        : '';
      console.log(this.filesUploadedArray);
    }
  }
  saveChanges() {
    let FilesformData = new FormData();
    if (this.filesUploadedArray.length > 0) {
      this.filesUploadedArray.map((file: any) => {
        FilesformData.append(file.name, file.file);
      });

      this.provider.storeOrganizationalProfileFiles(FilesformData).subscribe({
        next: (response: any) => {
          console.log(response);
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    }

    let imageprofileformData = new FormData();
    let profileImage = '';
    if (this.imagesArray.length > 0) {
      this.imagesArray.map((img: any) => {
        if (img['name'] == 'profileImage') {
          profileImage = img['file'];
          imageprofileformData.append('profilePicture', profileImage);
          this.clientService
            .changeProfilePicture(imageprofileformData)
            .subscribe({
              next: (response: any) => {
                console.log('Image Posted');
              },
              error: (err: any) => {
                console.log(err);
              },
            });
        }
      });
    }

    this.profile.phoneNumber = this.phoneNumber;
    this.profile.organizationalServiceProviderProfile.companyName = this.name;

    this.profile.organizationalServiceProviderProfile.projectService
      ? (this.profile.organizationalServiceProviderProfile.projectService.name =
          this.projectService)
      : '';
    this.profile.organizationalServiceProviderProfile.ospprofileSubServices[0]
      ? (this.profile.organizationalServiceProviderProfile.ospprofileSubServices[0].projectSubService.name =
          this.projectSubService)
      : '';

    delete this.profile.id;
    console.log(this.profile.organizationalServiceProviderProfile)
    this.provider
      .updateOrganizationalServiceProviderProfile(this.profile.organizationalServiceProviderProfile)
      .subscribe({
        next: (response: any) => {
          console.log('profile edited');
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }
  modalSrc: string = '';
  showModal: boolean = false;
  openModal(src: string) {
    this.modalSrc = src;
    this.showModal = true;
  }
  toggleModal = () => {
    this.showModal = !this.showModal;
  };
}
