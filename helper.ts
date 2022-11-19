declare module namespace {

    export interface ClientProfile {
        id: number;
        applicationUserId: string;
        applicationUser?: any;
        firstName: string;
        lastName: string;
        idFile: string;
        neighborhood: string;
        streetName: string;
        buildingNumber: number;
        additionalNumber: number;
        postalCode: string;
        joinRequestStatusId: number;
        districtId: number;
        dateCreated?: any;
        idNumber: string;
        accountOverview?: any;
        profilePictureFile: string;
        district?: any;
        joinRequestStatus?: any;
        projects: any[];
        profilePicturePath: string;
        idPath: string;
    }

    export interface OrganizationalServiceProviderProfile {
        id: number;
        applicationUserId: string;
        applicationUser?: any;
        companyName: string;
        companyRegisterationNumber: string;
        companyRegisterationNumberFile: string;
        licenseNumber: string;
        licenseFile: string;
        bankId: number;
        bankAccountNumber?: any;
        iBanNumber?: any;
        companyLogoFile: string;
        officePhoneNumber: string;
        officeMobileNumber: string;
        websiteLink: string;
        zakatCertificateNumber: number;
        zakatCertificateFile?: any;
        saudizationCertificateFile?: any;
        financialStatementFile?: any;
        coCMembershipNumber: number;
        coCMembershipFile?: any;
        isoFile?: any;
        companyClassificationId: number;
        representativeId?: any;
        districtId: number;
        joinRequestStatusId: number;
        companyRegisterationNumberEndDate: Date;
        companyRegisterationNumberStartDate: Date;
        licenseEndDate: Date;
        licenseStartDate: Date;
        vatregistrationCertificateEndDate: Date;
        vatregistrationCertificateStartDate: Date;
        dateCreated: Date;
        projectServiceId: number;
        unitNumber?: any;
        shortAddress?: any;
        cityName?: any;
        districtName?: any;
        streetName: string;
        buildingNumber: string;
        additionalNumber: string;
        postalCode: string;
        iBanFile?: any;
        professionLicenseFile?: any;
        professionLicenseNumber: string;
        socialInsuranceCertificateFile?: any;
        socialInsuranceCertificateNumber?: any;
        classificationCertificateFile?: any;
        classificationCertificateNumber: string;
        addedValueRegisterationCertificateFile?: any;
        addedValueRegisterationCertificateNumber?: any;
        bankName?: any;
        professionLicenseStartDate: Date;
        professionLicenseEndDate: Date;
        socialInsuranceCertificateStartDate: Date;
        socialInsuranceCertificateEndDate: Date;
        classificationCertificateStartDate: Date;
        classificationCertificateEndDate: Date;
        addedValueRegisterationCertificateStartDate: Date;
        addedValueRegisterationCertificateEndDate: Date;
        zakatCertificateStartDate?: any;
        zakatCertificateEndDate?: any;
        isoNumber?: any;
        isoStartDate: Date;
        isoEndDate: Date;
        financialStatementNumber?: any;
        financialStatementStartDate: Date;
        financialStatementEndDate: Date;
        saudizationCertificateStartDate: Date;
        saudizationCertificateEndDate: Date;
        saudizationCertificateNumber?: any;
        coCMembershipStartDate?: any;
        coCMembershipEndDate?: any;
        projectSubServiceId: number;
        accountOverview?: any;
        profilePictureFile: string;
        bank?: any;
        companyClassification?: any;
        district?: any;
        joinRequestStatus?: any;
        representative?: any;
        employees: any[];
        offers: any[];
        ospprofileSubServices: any[];
        projectService?: any;
        serviceProviderWorks: any[];
        profileAccepted: boolean;
        profileCreated: boolean;
        profilePicturePath: string;
        companyRegisterationNumberPath: string;
        licensePath: string;
        companyLogoPath: string;
        zakatCertificatePath: string;
        saudizationCertificatePath: string;
        financialStatementPath: string;
        coCMembershipPath: string;
        isoPath: string;
        professionLicensePath: string;
        classificationCertificatePath: string;
        addedValueRegisterationCertificatePath: string;
    }

    export interface Milestone {
        id: number;
        offerId: number;
        cost: number;
        percentage: number;
        isFirstMilestone: boolean;
        requiredWorkId: number;
        isLastMilestone: boolean;
        milestoneStatusId: number;
        isPaid: boolean;
        requiredWork?: any;
        milestoneStatus?: any;
    }

    export interface Offer {
        id: number;
        projectId: number;
        period: string;
        cost: number;
        numberOfMilestones: number;
        contractorCommitments: string;
        sizingMethod: string;
        contractTerms: string;
        disputeResolution: string;
        message: string;
        dateCreated: Date;
        individualServiceProviderProfileId?: any;
        organizationalServiceProviderProfileId: number;
        isAccepted: boolean;
        offerEndDate?: any;
        individualServiceProviderProfile?: any;
        organizationalServiceProviderProfile: OrganizationalServiceProviderProfile;
        materials: any[];
        milestones: Milestone[];
        totalCost: number;
        negotiations?: any;
    }

    export interface Project {
        id: number;
        clientProfileId: number;
        projectServiceId: number;
        projectSubServiceId?: any;
        name: string;
        projectCategoryId: number;
        projectSubCategoryId: number;
        districtId: number;
        plotNumber: string;
        organizationalChartNumber: string;
        area: number;
        subject: string;
        code: string;
        projectRequestStatusId: number;
        projectRequestStatus?: any;
        dateCreated: Date;
        isOpenForOffers: boolean;
        pricequoteEndDate: Date;
        requiredWorksNotes: string;
        clientProfile: ClientProfile;
        district?: any;
        projectCategory?: any;
        projectService?: any;
        projectSubCategory?: any;
        projectSubService?: any;
        clientProjectDocuments: any[];
        negotiations: any[];
        offers: Offer[];
        projectComponents: any[];
        projectRequiredWorks: any[];
        projectLevels: any[];
        componentIds?: any;
        requiredWorkIds?: any;
        myOffer?: any;
    }

    export interface RootObject {
        project: Project;
        payments: number;
        paid: number;
    }

}

