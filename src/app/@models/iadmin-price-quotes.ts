export interface IadminPriceQuotes {
  id: any;
  plotNumber: any;
  rganizationalChartNumber: any;
  clientProfileId: any;
  projectServiceId: any;
  projectSubServiceId: any;
  name: any;
  projectCategoryId: any;
  projectSubCategoryId: any;
  districtId: any;
  plotany: any;
  organizationalChartany: any;
  area: any;
  subject: any;
  code: any;
  projectRequestStatusId: any;
  projectRequestStatus: {
    id: any;
    rejectionReasonId: any;
    notes: any;
    projectStatusId: 1;
    dateCreated: any;
    projectStatus: any;
    rejectionReason: any;
    projects: [];
  };
  dateCreated: any;
  isOpenForOffers: boolean;
  pricequoteEndDate: any;
  requiredWorksNotes: any;
  clientProfile:
    | any
    | undefined
    | {
        id: any;
        applicationUserId: any;
        applicationUser:
          | any
          | {
              id: any;
              roleId: any;
              accountId: any;
              organizationalServiceProviderProfile: any;
              individualServiceProviderProfile: any;
              applicationRole: any;
              accountType: any;
              emailVerifyToken: any;
              passResetToken: any;
              complaints: any[];
              testimonials: any[];
              appointments: any;
              adminProfile: any;
              isActive: true;
              connectionId: any;
              accountActivationApplicationUserWhoTakeDecision: any;
              accountActivationApplicationUsers: [];
              messageReceivers: any;
              messageSenders: any;
              serviceProviderPartnerships: any;
              roles: any;
              userName: any;
              normalizedUserName: any;
              email: any;
              normalizedEmail: any;
              emailConfirmed: true;
              passwordHash: any;
              securityStamp: any;
              concurrencyStamp: any;
              phoneany: any;
              phoneanyConfirmed: any;
              twoFactorEnabled: any;
              lockoutEnd: any;
              lockoutEnabled: any;
              accessFailedCount: any;
            };
        firstName: any;
        lastName: any;
        idFile: any;
        neighborhood: any;
        streetName: any;
        buildingany: any;
        additionalany: any;
        postalCode: any;
        joinRequestStatusId: any;
        districtId: any;
        dateCreated: any;
        idany: any;
        accountOverview: any;
        profilePictureFile: any | undefined;
        district: any;
        joinRequestStatus: any;
        projects: any[];
        profilePicturePath: any;
        idPath: any;
      };
  district: {
    id: 11102522001;
    cityId: 2522;
    nameAr: '???? ????????????????';
    nameEn: 'As Salihiyah Dist.';
    city: {
      id: 2522;
      regionId: 11;
      nameAr: '????????';
      nameEn: 'Yadamah';
      region: {
        id: 11;
        code: 'NG';
        nameAr: '?????????? ??????????';
        nameEn: 'Najran';
        population: 505652;
        cities: [];
      };
      districts: [];
    };
    clientProfiles: any[];
    individualServiceProviderProfiles: [];
    organizationalServiceProviderProfiles: [];
    projects: [];
  };
  projectCategory: {
    id: 6;
    name: '??????????';
    projectSubCategories: [
      {
        id: 1104;
        name: '????????  ?????? ???????? ?????? ?????????? \r\n';
        projectCategoryId: 6;
        projects: [];
      }
    ];
    projects: [];
    serviceProviderWorks: [];
  };
  projectService: {
    id: 1;
    name: '???????????????? ????????????';
    ospprofileSubServices: [];
    projectServiceProjectServiceDocuments: [];
    projectSubServices: [];
    projects: [];
    requiredWorks: [
      {
        id: 1;
        name: '???????????? ?????????????? ???????? ????????????';
        projectServiceId: 1;
        projectRequiredWorks: [
          {
            projectId: 1109;
            requiredWorkId: 1;
          }
        ];
        requiredDocuments: [];
      },
      {
        id: 2;
        name: '???????????? ?????????????? ( ???????????? - ?????? ???????????? )';
        projectServiceId: 1;
        projectRequiredWorks: [
          {
            projectId: 1109;
            requiredWorkId: 2;
          }
        ];
        requiredDocuments: [];
      },
      {
        id: 3;
        name: '?????????? ( ???????????? - ?????? ???????????? ) ';
        projectServiceId: 1;
        projectRequiredWorks: [
          {
            projectId: 1109;
            requiredWorkId: 3;
          }
        ];
        requiredDocuments: [];
      },
      {
        id: 4;
        name: '?????????? ?????????????? ( ???????????? - ?????? ???????????? )';
        projectServiceId: 1;
        projectRequiredWorks: [
          {
            projectId: 1109;
            requiredWorkId: 4;
          }
        ];
        requiredDocuments: [];
      }
    ];
    organizationalServiceProviderProfiles: [];
  };
  projectSubCategory: {
    id: 1104;
    name: '????????  ?????? ???????? ?????? ?????????? \r\n';
    projectCategoryId: 6;
    projectCategory: {
      id: 6;
      name: '??????????';
      projectSubCategories: [];
      projects: [];
      serviceProviderWorks: [];
    };
    projects: [];
  };
  projectSubService: any;
  clientProjectDocuments: [
    {
      dateCreated: '2022-11-15T21:01:00';
      file: '63804142852570850501.jpg';
      filePath: 'https://app.mohandisy.com/files/Projects/63804142852570850501.jpg';
      id: 1165;
      projectId: 1201;
      requiredDocument: null;
      requiredDocumentId: 1;
    }
  ];
  negotiations: [];
  offers: [];
  projectComponents: [
    {
      projectId: 1109;
      componentId: 1;
      component: {
        id: 1;
        name: '???????????? ??????????';
        description: any;
        projectComponents: [];
      };
    },
    {
      projectId: 1109;
      componentId: 2;
      component: {
        id: 2;
        name: '???????????? ????????????';
        description: any;
        projectComponents: [];
      };
    }
  ];
  projectRequiredWorks: [
    {
      projectId: 1109;
      requiredWorkId: 1;
      requiredWork: {
        id: 1;
        name: '???????????? ?????????????? ???????? ????????????';
        projectServiceId: 1;
        projectService: {
          id: 1;
          name: '???????????????? ????????????';
          ospprofileSubServices: [];
          projectServiceProjectServiceDocuments: [];
          projectSubServices: [];
          projects: [];
          requiredWorks: [
            {
              id: 2;
              name: '???????????? ?????????????? ( ???????????? - ?????? ???????????? )';
              projectServiceId: 1;
              projectRequiredWorks: [
                {
                  projectId: 1109;
                  requiredWorkId: 2;
                }
              ];
              requiredDocuments: [];
            },
            {
              id: 3;
              name: '?????????? ( ???????????? - ?????? ???????????? ) ';
              projectServiceId: 1;
              projectRequiredWorks: [
                {
                  projectId: 1109;
                  requiredWorkId: 3;
                }
              ];
              requiredDocuments: [];
            },
            {
              id: 4;
              name: '?????????? ?????????????? ( ???????????? - ?????? ???????????? )';
              projectServiceId: 1;
              projectRequiredWorks: [
                {
                  projectId: 1109;
                  requiredWorkId: 4;
                }
              ];
              requiredDocuments: [];
            }
          ];
          organizationalServiceProviderProfiles: [];
        };
        projectRequiredWorks: [];
        requiredDocuments: [];
      };
    },
    {
      projectId: 1109;
      requiredWorkId: 2;
      requiredWork: {
        id: 2;
        name: '???????????? ?????????????? ( ???????????? - ?????? ???????????? )';
        projectServiceId: 1;
        projectService: {
          id: 1;
          name: '???????????????? ????????????';
          ospprofileSubServices: [];
          projectServiceProjectServiceDocuments: [];
          projectSubServices: [];
          projects: [];
          requiredWorks: [
            {
              id: 1;
              name: '???????????? ?????????????? ???????? ????????????';
              projectServiceId: 1;
              projectRequiredWorks: [
                {
                  projectId: 1109;
                  requiredWorkId: 1;
                }
              ];
              requiredDocuments: [];
            },
            {
              id: 3;
              name: '?????????? ( ???????????? - ?????? ???????????? ) ';
              projectServiceId: 1;
              projectRequiredWorks: [
                {
                  projectId: 1109;
                  requiredWorkId: 3;
                }
              ];
              requiredDocuments: [];
            },
            {
              id: 4;
              name: '?????????? ?????????????? ( ???????????? - ?????? ???????????? )';
              projectServiceId: 1;
              projectRequiredWorks: [
                {
                  projectId: 1109;
                  requiredWorkId: 4;
                }
              ];
              requiredDocuments: [];
            }
          ];
          organizationalServiceProviderProfiles: [];
        };
        projectRequiredWorks: [];
        requiredDocuments: [];
      };
    },
    {
      projectId: 1109;
      requiredWorkId: 3;
      requiredWork: {
        id: 3;
        name: '?????????? ( ???????????? - ?????? ???????????? ) ';
        projectServiceId: 1;
        projectService: {
          id: 1;
          name: '???????????????? ????????????';
          ospprofileSubServices: [];
          projectServiceProjectServiceDocuments: [];
          projectSubServices: [];
          projects: [];
          requiredWorks: [
            {
              id: 1;
              name: '???????????? ?????????????? ???????? ????????????';
              projectServiceId: 1;
              projectRequiredWorks: [
                {
                  projectId: 1109;
                  requiredWorkId: 1;
                }
              ];
              requiredDocuments: [];
            },
            {
              id: 2;
              name: '???????????? ?????????????? ( ???????????? - ?????? ???????????? )';
              projectServiceId: 1;
              projectRequiredWorks: [
                {
                  projectId: 1109;
                  requiredWorkId: 2;
                }
              ];
              requiredDocuments: [];
            },
            {
              id: 4;
              name: '?????????? ?????????????? ( ???????????? - ?????? ???????????? )';
              projectServiceId: 1;
              projectRequiredWorks: [
                {
                  projectId: 1109;
                  requiredWorkId: 4;
                }
              ];
              requiredDocuments: [];
            }
          ];
          organizationalServiceProviderProfiles: [];
        };
        projectRequiredWorks: [];
        requiredDocuments: [];
      };
    },
    {
      projectId: 1109;
      requiredWorkId: 4;
      requiredWork: {
        id: 4;
        name: '?????????? ?????????????? ( ???????????? - ?????? ???????????? )';
        projectServiceId: 1;
        projectService: {
          id: 1;
          name: '???????????????? ????????????';
          ospprofileSubServices: [];
          projectServiceProjectServiceDocuments: [];
          projectSubServices: [];
          projects: [];
          requiredWorks: [
            {
              id: 1;
              name: '???????????? ?????????????? ???????? ????????????';
              projectServiceId: 1;
              projectRequiredWorks: [
                {
                  projectId: 1109;
                  requiredWorkId: 1;
                }
              ];
              requiredDocuments: [];
            },
            {
              id: any;
              name: any;
              projectServiceId: 1;
              projectRequiredWorks: [
                {
                  projectId: any;
                  requiredWorkId: any;
                }
              ];
              requiredDocuments: any[];
            },
            {
              id: any;
              name: any;
              projectServiceId: 1;
              projectRequiredWorks: [
                {
                  projectId: any;
                  requiredWorkId: any;
                }
              ];
              requiredDocuments: [];
            }
          ];
          organizationalServiceProviderProfiles: [];
        };
        projectRequiredWorks: [];
        requiredDocuments: [];
      };
    }
  ];
  projectLevels: [];
  componentIds: any;
  requiredWorkIds: any;
  myOffer: any;
}
