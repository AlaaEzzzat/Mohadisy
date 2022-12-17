import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceProvidorService } from 'src/app/@core/services/admin/admin-service-providor.service';
import { IChangeStatus } from 'src/app/@models/ichange-status';
import { Indivdual } from 'src/app/@models/indivdual';
import { Organiztionl } from 'src/app/@models/organiztionl';

@Component({
  selector: 'app-admin-sp-updata',
  templateUrl: './admin-sp-updata.component.html',
  styleUrls: ['./admin-sp-updata.component.scss']
})
export class AdminSpUpdataComponent implements OnInit {
  currentIndivdual: IND= {} as IND;
  currentIndivdual2: IND= {} as IND;
  iChangeStatus: IChangeStatus | undefined = undefined;
  FileformData = new FormData();
  currentOrganiztionl: OSP= {} as OSP;
  currentOrganiztionl2: OSP= {} as OSP;

  productCurrent:any;
  productCurrent2:any;
  idProductSessionStorage: any;
  userformMassage :FormGroup;
  formOrganiztionl :FormGroup;
  img:any

  constructor(private router:Router ,private ServicesProvidor:AdminServiceProvidorService,private formbuilder:FormBuilder,private route: ActivatedRoute) {


    this.idProductSessionStorage = sessionStorage.getItem("Productsp")
    this.productCurrent=JSON.parse(this.idProductSessionStorage)
    if(this.productCurrent.applicationUser.accountType.key=== 'CO'){
      this.currentOrganiztionl=this.productCurrent
    }else{
      this.currentIndivdual=this.productCurrent
    }
    this.userformMassage=this.formbuilder.group({
      membershipFile:[`${this.currentIndivdual.membershipFile}`,[Validators.required]],
      city:[`${this.currentIndivdual.city}`,[Validators.required]],
      shortAddress:[`${this.currentIndivdual.shortAddress}`,[Validators.required]],
      firstName:[`${this.currentIndivdual.firstName}`,[Validators.required]],
      lastName:[`${this.currentIndivdual.lastName}`,[Validators.required]],
      postalBox:[`${this.currentIndivdual.postalBox}`,[Validators.required]],
      neighborhood:[`${this.currentIndivdual.neighborhood}`,[Validators.required]],
      membershipNumber:[`${this.currentIndivdual.membershipNumber}`,[Validators.required]],
      streetName:[`${this.currentIndivdual.streetName}`,[Validators.required]],
      districtName:[`${this.currentIndivdual.districtName}`,[Validators.required]]
      ,profilePictureFile:[`${this.currentIndivdual.profilePictureFile}`,[Validators.required]],
      bankAccountNumber:[`${this.currentIndivdual.bankAccountNumber}`,[Validators.required]],
      postalCode:[`${this.currentIndivdual.postalCode}`,[Validators.required]],
      additionalNumber:[`${this.currentIndivdual.additionalNumber}`,[Validators.required]],
      buildingNumber:[`${this.currentIndivdual.buildingNumber}`,[Validators.required]],
      idFile:[`${this.currentIndivdual.idFile}`,[Validators.required]],
      idNumber:[`${this.currentIndivdual.idNumber}`,[Validators.required]],
    });
    this.formOrganiztionl=this.formbuilder.group({
      companyName:[`${this.currentOrganiztionl.companyName}`,[Validators.required]],
      companyRegisterationNumber:[`${this.currentOrganiztionl.companyRegisterationNumber}`,[Validators.required]],
      shortAddressOrg:[`${this.currentOrganiztionl.shortAddress}`,[Validators.required]],
      companyRegisterationNumberFile:[`${this.currentOrganiztionl.companyRegisterationNumberFile}`,[Validators.required]],
      licenseFile:[`${this.currentOrganiztionl.licenseFile}`,[Validators.required]],
      bankAccountNumberOrg:[`${this.currentOrganiztionl.bankAccountNumber}`,[Validators.required]],
      iBanNumber:[`${this.currentOrganiztionl.iBanNumber}`,[Validators.required]],
      companyLogoFile:[`${this.currentOrganiztionl.companyLogoFile}`,[Validators.required]],
      officePhoneNumber:[`${this.currentOrganiztionl.officePhoneNumber}`,[Validators.required]]
      ,officeMobileNumber:[`${this.currentOrganiztionl.officeMobileNumber}`,[Validators.required]],
      websiteLink:[`${this.currentOrganiztionl.websiteLink}`,[Validators.required]],
      zakatCertificateFile:[`${this.currentOrganiztionl.zakatCertificateFile}`,[Validators.required]],
      saudizationCertificateFile:[`${this.currentOrganiztionl.saudizationCertificateFile}`,[Validators.required]],
      financialStatementFile:[`${this.currentOrganiztionl.financialStatementFile}`,[Validators.required]],
      coCMembershipFile:[`${this.currentOrganiztionl.coCMembershipFile}`,[Validators.required]],
      isoFile:[`${this.currentOrganiztionl.isoFile}`,[Validators.required]],
      companyClassificationId:[`${this.currentOrganiztionl.companyClassificationId}`,[Validators.required]],
      unitNumber:[`${this.currentOrganiztionl.unitNumber}`,[Validators.required]],
      cityNameOrg:[`${this.currentOrganiztionl.cityName}`,[Validators.required]],
      districtNameOrg:[`${this.currentOrganiztionl.districtName}`,[Validators.required]],
      streetNameOrg:[`${this.currentOrganiztionl.streetName}`,[Validators.required]],
      buildingNumberOrg:[`${this.currentOrganiztionl.buildingNumber}`,[Validators.required]]
      ,
      postalCodeOrg:[`${this.currentOrganiztionl.postalCode}`,[Validators.required]],
      iBanFile:[`${this.currentOrganiztionl.iBanFile}`,[Validators.required]],
      professionLicenseFile:[`${this.currentOrganiztionl.professionLicenseFile}`,[Validators.required]],
      professionLicenseNumber:[`${this.currentOrganiztionl.professionLicenseNumber}`,[Validators.required]],
      socialInsuranceCertificateFile:[`${this.currentOrganiztionl.socialInsuranceCertificateFile}`,[Validators.required]],
      socialInsuranceCertificateNumber:[`${this.currentOrganiztionl.socialInsuranceCertificateNumber}`,[Validators.required]],
      classificationCertificateFile:[`${this.currentOrganiztionl.classificationCertificateFile}`,[Validators.required]],
      addedValueRegisterationCertificateFile:[`${this.currentOrganiztionl.addedValueRegisterationCertificateFile}`,[Validators.required]],
      addedValueRegisterationCertificateNumber:[`${this.currentOrganiztionl.addedValueRegisterationCertificateNumber}`,[Validators.required]],
      bankName:[`${this.currentOrganiztionl.bankName}`,[Validators.required]],
      isoNumber:[`${this.currentOrganiztionl.isoNumber}`,[Validators.required]],
      financialStatementNumber:[`${this.currentOrganiztionl.financialStatementNumber}`,[Validators.required]],
      saudizationCertificateNumber:[`${this.currentOrganiztionl.saudizationCertificateNumber}`,[Validators.required]],
      classificationCertificateNumber:[`${this.currentOrganiztionl.classificationCertificateNumber}`,[Validators.required]]

    });

  }

  ngOnInit(): void {
  }
  uplaodFile(e: any) {

       
    if (e.target.files && e.target.files.length > 0) {
      let file = e.target.files[0];
      this.FileformData.append('file', file);
  }
 
  
  }

  get classificationCertificateNumber(){
    return this.formOrganiztionl?.get('classificationCertificateNumber');
  }
  get companyName(){
    return this.formOrganiztionl?.get('companyName');
  }
  get cityOrg(){
    return this.formOrganiztionl?.get('city');
  }
  get companyRegisterationNumber(){
    return this.formOrganiztionl?.get('companyRegisterationNumber');
  }
  get shortAddressOrg(){
    return this.formOrganiztionl?.get('shortAddress');
  }
  get companyRegisterationNumberFile(){
    return this.formOrganiztionl?.get('companyRegisterationNumberFile');
  }
  get licenseNumber(){
    return this.formOrganiztionl?.get('licenseNumber');
  }
  get licenseFile(){
    return this.formOrganiztionl?.get('licenseFile');
  }
  get bankAccountNumberOrg(){
    return this.formOrganiztionl?.get('bankAccountNumber');
  }
  get iBanNumber(){
    return this.formOrganiztionl?.get('iBanNumber');
  }
  get companyLogoFile(){
    return this.formOrganiztionl?.get('companyLogoFile');
  }
  get officePhoneNumber(){
    return this.formOrganiztionl?.get('officePhoneNumber');
  }
  get officeMobileNumber(){
    return this.formOrganiztionl?.get('officeMobileNumber');
  }
  get websiteLink(){
    return this.formOrganiztionl?.get('websiteLink');
  }
  get zakatCertificateNumber(){
    return this.formOrganiztionl?.get('zakatCertificateNumber');
  }
  get zakatCertificateFile(){
    return this.formOrganiztionl?.get('zakatCertificateFile');
  }
  get professionLicenseFile(){
    return this.formOrganiztionl?.get('professionLicenseFile');
  }
  get iBanFile(){
    return this.formOrganiztionl?.get('iBanFile');
  }
  get postalCodeOrg(){
    return this.formOrganiztionl?.get('postalCode');
  }
  // get additionalNumberOrg(){
  //   return this.formOrganiztionl?.get('additionalNumber');
  // }
  get buildingNumberOrg(){
    return this.formOrganiztionl?.get('buildingNumber');
  }
  get streetNameOrg(){
    return this.formOrganiztionl?.get('streetName');
  }
  get districtNameOrg(){
    return this.formOrganiztionl?.get('districtName');
  }
  get cityNameOrg(){
    return this.formOrganiztionl?.get('cityName');
  }
  get unitNumber(){
    return this.formOrganiztionl?.get('unitNumber');
  }
  get companyClassificationId(){
    return this.formOrganiztionl?.get('companyClassificationId');
  }
  get isoFile(){
    return this.formOrganiztionl?.get('isoFile');
  }
  get coCMembershipFile(){
    return this.formOrganiztionl?.get('coCMembershipFile');
  }
  get coCMembershipNumber(){
    return this.formOrganiztionl?.get('coCMembershipNumber');
  }
  get financialStatementFile(){
    return this.formOrganiztionl?.get('financialStatementFile');
  }
  get saudizationCertificateFile(){
    return this.formOrganiztionl?.get('saudizationCertificateFile');
  }

  get saudizationCertificateNumber(){
    return this.formOrganiztionl?.get('saudizationCertificateNumber');
  }
  get financialStatementNumber(){
    return this.formOrganiztionl?.get('financialStatementNumber');
  }
  get isoNumber(){
    return this.formOrganiztionl?.get('isoNumber');
  }
  get bankName(){
    return this.formOrganiztionl?.get('bankName');
  }
  get addedValueRegisterationCertificateNumber(){
    return this.formOrganiztionl?.get('addedValueRegisterationCertificateNumber');
  }
  get addedValueRegisterationCertificateFile(){
    return this.formOrganiztionl?.get('addedValueRegisterationCertificateFile');
  }
  get classificationCertificateFile(){
    return this.formOrganiztionl?.get('classificationCertificateFile');
  }
  get socialInsuranceCertificateNumber(){
    return this.formOrganiztionl?.get('socialInsuranceCertificateNumber');
  }
  get socialInsuranceCertificateFile(){
    return this.formOrganiztionl?.get('socialInsuranceCertificateFile');
  }
  get professionLicenseNumber(){
    return this.formOrganiztionl?.get('professionLicenseNumber');
  }
  get membershipFile(){
    return this.userformMassage?.get('membershipFile');
  }
  // get city(){
  //   return this.userformMassage?.get('city');
  // }
  get shortAddress(){
    return this.userformMassage?.get('shortAddress');
  }
  get firstName(){
    return this.userformMassage?.get('firstName');
  }
  get lastName(){
    return this.userformMassage?.get('lastName');
  }
  get postalBox(){
    return this.userformMassage?.get('postalBox');
  }
  // get neighborhood(){
  //   return this.userformMassage?.get('neighborhood');
  // }
  get membershipNumber(){
    return this.userformMassage?.get('membershipNumber');
  }
  get streetName(){
    return this.userformMassage?.get('streetName');
  }
  // get districtName(){
  //   return this.userformMassage?.get('districtName');
  // }
  get profilePictureFile(){
    return this.userformMassage?.get('profilePictureFile');
  }
  get bankAccountNumber(){
    return this.userformMassage?.get('bankAccountNumber');
  }
  get postalCode(){
    return this.userformMassage?.get('postalCode');
  }
  get additionalNumber(){
    return this.userformMassage?.get('additionalNumber');
  }
  get buildingNumber(){
    return this.userformMassage?.get('buildingNumber');
  }
  get idNumber(){
    return this.userformMassage?.get('idNumber');
  }
  get idFile(){
    return this.userformMassage?.get('idFile');
  }
  updatapro(){
    this.currentIndivdual2={
      "id":this.productCurrent.id,
      "applicationUserId": this.productCurrent.applicationUserId,
      "membershipNumber": this.membershipNumber?.value,
      "membershipFile": this.membershipFile?.value,
      "idNumber": this.idNumber?.value,
      "city": this.productCurrent.city,
      "neighborhood":this.productCurrent.neighborhood,
      "postalBox": this.postalBox?.value,
      "lastName": this.lastName?.value,
      "firstName":this.firstName?.value,
      "idFile":this.idFile?.value,
      "companyClassificationId": this.productCurrent.companyClassificationId,
      "joinRequestStatusId": this.productCurrent.joinRequestStatusId,
      "districtId":this.productCurrent.districtId,
      "unitNumber": this.productCurrent.unitNumber,
      "shortAddress": this.shortAddress?.value,
      "cityName": this.productCurrent.cityName,
      "districtName":this.productCurrent.districtName,
      "streetName":this.streetName?.value,
      "buildingNumber": this.buildingNumber?.value,
      "additionalNumber": this.productCurrent.additionalNumber,
      "postalCode": this.postalCode?.value,
      "accountOverview": this.productCurrent.accountOverview,
      "profilePictureFile": this.profilePictureFile?.value,
      "bankId":this.productCurrent.bankId,
      "bankAccountNumber": this.bankAccountNumber?.value,


    }

    this.currentOrganiztionl2={

      "id":this.productCurrent.id,
      "applicationUserId": this.productCurrent.applicationUserId,
      "companyName":this.companyName?.value,
      "companyRegisterationNumber": this.companyRegisterationNumber?.value,
      "companyRegisterationNumberFile": this.companyRegisterationNumberFile?.value,
      "licenseNumber":this.productCurrent.licenseNumber,
      "licenseFile": this.licenseFile?.value,
      "bankId": this.productCurrent.bankId,
      "bankAccountNumber": this.bankAccountNumberOrg?.value,
      "iBanNumber": this.iBanNumber?.value,
      "companyLogoFile": this.companyLogoFile?.value,
      "officePhoneNumber": this.officePhoneNumber?.value,
      "officeMobileNumber":this.officeMobileNumber?.value,
      "websiteLink": this.websiteLink?.value,
      "zakatCertificateNumber": this.productCurrent.zakatCertificateNumber,
      "zakatCertificateFile": this.zakatCertificateFile?.value,
      "saudizationCertificateFile":this.saudizationCertificateFile?.value,
      "financialStatementFile":this.financialStatementFile?.value,
      "coCMembershipNumber": this.productCurrent.coCMembershipNumber,
      "coCMembershipFile": this.coCMembershipFile?.value,
      "isoFile": this.isoFile?.value,
      "companyClassificationId": this.companyClassificationId?.value,
      "representativeId": this.productCurrent.representativeId,
      "districtId": this.productCurrent.districtId,
      "joinRequestStatusId": this.productCurrent.joinRequestStatusId,
      "companyRegisterationNumberEndDate": this.productCurrent.companyRegisterationNumberEndDate,
      "companyRegisterationNumberStartDate":this.productCurrent.companyRegisterationNumberStartDate,
      "licenseEndDate": this.productCurrent.licenseEndDate,
      "licenseStartDate":this.productCurrent.licenseStartDate,
      "vatregistrationCertificateEndDate": this.productCurrent.vatregistrationCertificateEndDate,
      "vatregistrationCertificateStartDate": this.productCurrent.vatregistrationCertificateStartDate,
      "projectServiceId":this.productCurrent.projectServiceId,
      "unitNumber": this.unitNumber?.value,
      "shortAddress": this.shortAddressOrg?.value,
      "cityName": this.cityNameOrg?.value,
      "districtName": this.districtNameOrg?.value,
      "streetName": this.streetNameOrg?.value,
      "buildingNumber": this.buildingNumberOrg?.value,
      "additionalNumber": this.productCurrent.additionalNumber,
      "postalCode": this.postalCodeOrg?.value,
      "iBanFile": this.iBanFile?.value,
      "professionLicenseFile": this.professionLicenseFile?.value,
      "professionLicenseNumber": this.professionLicenseNumber?.value,
      "socialInsuranceCertificateFile": this.socialInsuranceCertificateFile?.value,
      "socialInsuranceCertificateNumber": this.socialInsuranceCertificateNumber?.value,
      "classificationCertificateFile": this.classificationCertificateFile?.value,
      "classificationCertificateNumber": this.classificationCertificateNumber?.value,
      "addedValueRegisterationCertificateFile": this.addedValueRegisterationCertificateFile?.value,
      "addedValueRegisterationCertificateNumber": this.addedValueRegisterationCertificateNumber?.value,
      "bankName": this.bankName?.value,
      "professionLicenseStartDate": this.productCurrent.professionLicenseStartDate,
      "professionLicenseEndDate": this.productCurrent.professionLicenseEndDate,
      "socialInsuranceCertificateStartDate": this.productCurrent.socialInsuranceCertificateStartDate,
      "socialInsuranceCertificateEndDate": this.productCurrent.socialInsuranceCertificateEndDate,
      "classificationCertificateStartDate": this.productCurrent.classificationCertificateStartDate,
      "classificationCertificateEndDate": this.productCurrent.classificationCertificateEndDate,
      "addedValueRegisterationCertificateStartDate": this.productCurrent.addedValueRegisterationCertificateStartDate,
      "addedValueRegisterationCertificateEndDate": this.productCurrent.addedValueRegisterationCertificateEndDate,
      "zakatCertificateStartDate": this.productCurrent.zakatCertificateStartDate,
      "zakatCertificateEndDate": this.productCurrent.zakatCertificateEndDate,
      "isoNumber": this.isoNumber?.value,
      "isoStartDate": this.productCurrent.isoStartDate,
      "isoEndDate": this.productCurrent.isoEndDate,
      "financialStatementNumber": this.financialStatementNumber?.value,
      "financialStatementStartDate": this.productCurrent.financialStatementStartDate,
      "financialStatementEndDate": this.productCurrent.financialStatementEndDate,
      "saudizationCertificateStartDate": this.productCurrent.saudizationCertificateStartDate,
      "saudizationCertificateEndDate": this.productCurrent.saudizationCertificateEndDate,
      "saudizationCertificateNumber": this.saudizationCertificateNumber?.value,
      "coCMembershipStartDate": this.productCurrent.coCMembershipStartDate,
      "coCMembershipEndDate": this.productCurrent.coCMembershipEndDate,
      "projectSubServiceId": this.productCurrent.projectSubServiceId,
      "accountOverview": this.productCurrent.accountOverview,
      "profilePictureFile": this.productCurrent.profilePictureFile,

    }
this.iChangeStatus = {
  profileId: this.productCurrent.id,
  description:"تم التعديل البيانات و تحويل طلبات المكتمله",
  accountStatusId: 7,
  joinRequestStatuses:[""]

};
    if (this.productCurrent.applicationUser.accountType.key === 'CO'){
          let test = JSON.stringify(this.currentOrganiztionl2);
        sessionStorage.setItem('test', test);
        this.ServicesProvidor.updateOrganizationalUpdateProfile(this.currentOrganiztionl2).subscribe({
          next:(prd)=>{
            this.router.navigate(['/Admin/sp'])
          },
          error:(err)=>{
            alert(err);
          }
        });
    this.ServicesProvidor.changeOrganizationalStatus(this.iChangeStatus).subscribe((data) => {
              });

  } else{
      this.ServicesProvidor.updateIndividualUpdateProfile(this.currentIndivdual2).subscribe({
        next:(prd)=>{
  
          this.router.navigate(['/Admin/sp'])
          this.ServicesProvidor.updateIndividualstoreProfileFiles(this.FileformData,prd.id).subscribe({next:(data)=>{
          },error:(er)=>{
            console.log(er)
          }})
        },
        error:(err)=>{
          alert(err)
        }
      }
       );
      
    }
  }
}

export interface IND{
  "id": 0,
  "applicationUserId": "string",
  "membershipNumber": "string",
  "membershipFile": "string",
  "idNumber": "string",
  "city": "string",
  "neighborhood": "string",
  "postalBox": "string",
  "lastName": "string",
  "firstName": "string",
  "idFile": "string",
  "companyClassificationId": 0,
  "joinRequestStatusId": 0,
  "districtId": 0,
  "unitNumber": "string",
  "shortAddress": "string",
  "cityName": "string",
  "districtName": "string",
  "streetName": "string",
  "buildingNumber": "string",
  "additionalNumber": "string",
  "postalCode": "string",
  "accountOverview": "string",
  "profilePictureFile": "string",
  "bankId": 0,
  "bankAccountNumber": "string"

}
export interface OSP{
  "id": 0,
  "applicationUserId": "string",
  "companyName": "string",
  "companyRegisterationNumber": "string",
  "companyRegisterationNumberFile": "string",
  "licenseNumber": "string",
  "licenseFile": "string",
  "bankId": 0,
  "bankAccountNumber": "string",
  "iBanNumber": "string",
  "companyLogoFile": "string",
  "officePhoneNumber": "string",
  "officeMobileNumber": "string",
  "websiteLink": "string",
  "zakatCertificateNumber": 0,
  "zakatCertificateFile": "string",
  "saudizationCertificateFile": "string",
  "financialStatementFile": "string",
  "coCMembershipNumber": 0,
  "coCMembershipFile": "string",
  "isoFile": "string",
  "companyClassificationId": 0,
  "representativeId": 0,
  "districtId": 0,
  "joinRequestStatusId": 0,
  "companyRegisterationNumberEndDate": "2022-11-09T16:23:42.675Z",
  "companyRegisterationNumberStartDate": "2022-11-09T16:23:42.675Z",
  "licenseEndDate": "2022-11-09T16:23:42.675Z",
  "licenseStartDate": "2022-11-09T16:23:42.675Z",
  "vatregistrationCertificateEndDate": "2022-11-09T16:23:42.675Z",
  "vatregistrationCertificateStartDate": "2022-11-09T16:23:42.675Z",
  "projectServiceId": 0,
  "unitNumber": "string",
  "shortAddress": "string",
  "cityName": "string",
  "districtName": "string",
  "streetName": "string",
  "buildingNumber": "string",
  "additionalNumber": "string",
  "postalCode": "string",
  "iBanFile": "string",
  "professionLicenseFile": "string",
  "professionLicenseNumber": "string",
  "socialInsuranceCertificateFile": "string",
  "socialInsuranceCertificateNumber": "string",
  "classificationCertificateFile": "string",
  "classificationCertificateNumber": "string",
  "addedValueRegisterationCertificateFile": "string",
  "addedValueRegisterationCertificateNumber": "string",
  "bankName": "string",
  "professionLicenseStartDate": "2022-11-09T16:23:42.675Z",
  "professionLicenseEndDate": "2022-11-09T16:23:42.675Z",
  "socialInsuranceCertificateStartDate": "2022-11-09T16:23:42.675Z",
  "socialInsuranceCertificateEndDate": "2022-11-09T16:23:42.675Z",
  "classificationCertificateStartDate": "2022-11-09T16:23:42.675Z",
  "classificationCertificateEndDate": "2022-11-09T16:23:42.675Z",
  "addedValueRegisterationCertificateStartDate": "2022-11-09T16:23:42.675Z",
  "addedValueRegisterationCertificateEndDate": "2022-11-09T16:23:42.675Z",
  "zakatCertificateStartDate": "2022-11-09T16:23:42.675Z",
  "zakatCertificateEndDate": "2022-11-09T16:23:42.675Z",
  "isoNumber": "string",
  "isoStartDate": "2022-11-09T16:23:42.675Z",
  "isoEndDate": "2022-11-09T16:23:42.675Z",
  "financialStatementNumber": "string",
  "financialStatementStartDate": "2022-11-09T16:23:42.675Z",
  "financialStatementEndDate": "2022-11-09T16:23:42.675Z",
  "saudizationCertificateStartDate": "2022-11-09T16:23:42.675Z",
  "saudizationCertificateEndDate": "2022-11-09T16:23:42.675Z",
  "saudizationCertificateNumber": "string",
  "coCMembershipStartDate": "2022-11-09T16:23:42.675Z",
  "coCMembershipEndDate": "2022-11-09T16:23:42.675Z",
  "projectSubServiceId": 0,
  "accountOverview": "string",
  "profilePictureFile": "string"
}
