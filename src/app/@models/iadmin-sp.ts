export interface IadminSp {
  id: number;
  accountOverview: any;
  addedValueRegisterationCertificateEndDate: string;
  addedValueRegisterationCertificateFile: any;
  addedValueRegisterationCertificateNumber: any;
  addedValueRegisterationCertificatePath: string;
  addedValueRegisterationCertificateStartDate: string;
  companyClassificationId: number;
  companyLogoFile: string;
  companyLogoPath: string;
  companyName: string;
  companyRegisterationNumber: string;
  companyRegisterationNumberEndDate: string;
  companyRegisterationNumberFile: any;
  companyRegisterationNumberPath: string;
  companyRegisterationNumberStartDate: string;
  dateCreated: string;
  additionalNumber: string;
  applicationUserId: string;
  bank: any;
  bankAccountNumber: any;
  bankId: number;
  bankName: any;
  buildingNumber:string;
  cityName: any;
  classificationCertificateEndDate: string;
  classificationCertificateFile: string;
  classificationCertificateNumber: string;
  classificationCertificatePath: string;
  classificationCertificateStartDate: string;
  coCMembershipEndDate: any;
  coCMembershipFile: any;
  coCMembershipNumber: number;
  coCMembershipPath: string;
  coCMembershipStartDate: any;
  applicationUser: {
    normalizedUserName:string,
    phoneNumber:string,
    id: string;
    roleId: string;
    accountId: number;
    individualServiceProviderProfile: any;
    clientProfile: any;
    accountType: {
      id: number;
      typeName: string;
      applicationRoleId: string;
      key: string;
    };
  };
  companyClassification: {
    id: number;
    individualServiceProviderProfiles: [];
    name: string;

    organizationalServiceProviderProfiles: [];
  };
  representative: {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    organizationalServiceProviderProfileId: number;
    dateCreated: number;
  };
  district: {
    id: number;
    cityId: number;
    nameAr: string;
    nameEn: string;
    city: {
      districts: [];
      id: number;
      region: {
        cities: [];
        id: number;
        code: string;
        nameAr: string;
        nameEn: string;
        population: number;
      };
      regionId: number;
      anyable: boolean;
      nameAr: string;
      maxLength: number;
      minLength: number;
      nameEn: string;
    };
    districtId: number;
    districtName: any;
    employees: [{ name: string; employeeLevel: string }];
    financialStatementEndDate: string;
    financialStatementFile: any;
    financialStatementNumber: any;
    financialStatementPath: string;
    financialStatementStartDate: string;
    iBanFile: any;
    iBanNumber: any;
    id2: number;
    isoEndDate: string;
    isoFile: any;
    isoNumber: any;
    isoPath: string;
    isoStartDate: string;
    joinRequestStatus: {
      id: number;
      description: string,
      accountStatusId: number,
      dateCreated: any
      accountStatus: {},
    };
    joinRequestStatusId: number;
    licenseEndDate: string;
    licenseFile: any;
    licenseNumber: string;
    licensePath: string;
    licenseStartDate: string;
    offers: [];
    officeMobileNumber: string;
    officePhoneNumber: string;
    ospprofileSubServices: [];
    postalCode: string;
    professionLicenseEndDate: string;
    professionLicenseFile: any;
    professionLicenseNumber: string;
    professionLicensePath: string;
    professionLicenseStartDate: string;
    profileCompleted: boolean;
    profileCreated: boolean;
    profilePictureFile: string;
    profilePicturePath: string;
    projectService: any;
    projectServiceId: number;
    projectSubServiceId: number;

    representativeId: any;
    saudizationCertificateEndDate: string;
    saudizationCertificateFile: any;
    saudizationCertificateNumber: any;
    saudizationCertificatePath: string;
    saudizationCertificateStartDate: string;
    serviceProviderWorks: [];
    shortAddress: any;
    socialInsuranceCertificateEndDate: string;
    socialInsuranceCertificateFile: any;
    socialInsuranceCertificatePath: string;
    socialInsuranceCertificateNumber: any;
    socialInsuranceCertificateStartDate: string;
    streetName: string;
    unitNumber: any;
    vatregistrationCertificateEndDate: string;
    vatregistrationCertificateStartDate: string;
    websiteLink:string;
    yearlyBudget: string;
    zakatCertificateEndDate: any;
    zakatCertificateFile: any;
    zakatCertificateNumber: 123;
    zakatCertificatePath: string;
    zakatCertificateStartDate: any;
  };


}
