export interface Organiztionl {

  "id": 0,
  "applicationUserId": "string",
  "applicationUser": {
    "userName": "string",
    "normalizedUserName": "string",
    "email": "string",
    "normalizedEmail": "string",
    "emailConfirmed": true,
    "passwordHash": "string",
    "securityStamp": "string",
    "concurrencyStamp": "string",
    "phoneNumber": "string",
    "phoneNumberConfirmed": true,
    "twoFactorEnabled": true,
    "lockoutEnd": "2022-11-09T12:23:44.136Z",
    "lockoutEnabled": true,
    "accessFailedCount": 0,
    "id": "string",
    "roleId": "string",
    "accountId": 0,
    "individualServiceProviderProfile": {
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
      "dateCreated": "2022-11-09T12:23:44.136Z",
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
      "bankAccountNumber": "string",
      "offers": [
        null
      ],
      "serviceProviderWorks": [
        null
      ],
      "profileCompleted": true,
      "profileCreated": true
    },
    "clientProfile": {
      "id": 0,
      "applicationUserId": "string",
      "firstName": "string",
      "lastName": "string",
      "idFile": "string",
      "neighborhood": "string",
      "streetName": "string",
      "buildingNumber": 0,
      "additionalNumber": 0,
      "postalCode": "string",
      "joinRequestStatusId": 0,
      "districtId": 0,
      "dateCreated": "2022-11-09T12:23:44.136Z",
      "idNumber": "string",
      "accountOverview": "string",
      "profilePictureFile": "string",
      "projects": [
        {
          "id": 0,
          "clientProfileId": 0,
          "projectServiceId": 0,
          "projectSubServiceId": 0,
          "name": "string",
          "projectCategoryId": 0,
          "projectSubCategoryId": 0,
          "districtId": 0,
          "plotNumber": "string",
          "organizationalChartNumber": "string",
          "area": 0,
          "subject": "string",
          "code": "string",
          "projectRequestStatusId": 0,
          "projectRequestStatus": {
            "id": 0,
            "rejectionReasonId": 0,
            "notes": "string",
            "projectStatusId": 0,
            "dateCreated": "2022-11-09T12:23:44.136Z",
            "projectStatus": {
              "id": 0,
              "nameAr": "string",
              "nameEn": "string",
              "typeId": 0,
              "isDisplayedForUsers": true,
              "projectRequestStatuses": [
                null
              ]
            },
            "rejectionReason": {
              "id": 0,
              "name": "string",
              "projectRequestStatuses": [
                null
              ]
            },
            "projects": [
              null
            ]
          },
          "dateCreated": "2022-11-09T12:23:44.136Z",
          "isOpenForOffers": true,
          "pricequoteEndDate": "2022-11-09T12:23:44.136Z",
          "requiredWorksNotes": "string",
          "projectCategory": {
            "id": 0,
            "name": "string",
            "projectSubCategories": [
              {
                "id": 0,
                "name": "string",
                "projectCategoryId": 0,
                "projects": [
                  null
                ]
              }
            ],
            "projects": [
              null
            ],
            "serviceProviderWorks": [
              null
            ]
          },
          "projectSubCategory": {
            "id": 0,
            "name": "string",
            "projectCategoryId": 0,
            "projects": [
              null
            ]
          },
          "projectSubService": {
            "id": 0,
            "name": "string",
            "projectServiceId": 0,
            "ospprofileSubServices": [
              null
            ],
            "projects": [
              null
            ]
          },
          "clientProjectDocuments": [
            {
              "id": 0,
              "projectId": 0,
              "requiredDocumentId": 0,
              "file": "string",
              "dateCreated": "2022-11-09T12:23:44.136Z",
              "requiredDocument": {
                "id": 0,
                "requiredWorkId": 0,
                "name": "string",
                "identifier": "string",
                "clientProjectDocuments": [
                  null
                ]
              }
            }
          ],
          "negotiations": [
            {
              "id": 0,
              "projectId": 0,
              "senderId": "string",
              "receiverId": "string",
              "message": "string",
              "dateCreated": "2022-11-09T12:23:44.136Z"
            }
          ],
          "offers": [
            null
          ],
          "projectComponents": [
            {
              "projectId": 0,
              "componentId": 0,
              "component": {
                "id": 0,
                "name": "string",
                "description": "string",
                "projectComponents": [
                  null
                ]
              }
            }
          ],
          "projectRequiredWorks": [
            {
              "projectId": 0,
              "requiredWorkId": 0
            }
          ],
          "projectLevels": [
            {
              "id": 0,
              "projectId": 0,
              "status": true,
              "isFinished": true,
              "fileName": "string",
              "content": "string",
              "imageName": "string",
              "levelName": "string"
            }
          ],
          "componentIds": [
            0
          ],
          "requiredWorkIds": [
            0
          ]
        }
      ]
    },
    "applicationRole": {
      "id": "string",
      "name": "string",
      "normalizedName": "string",
      "concurrencyStamp": "string",
      "isActive": true,
      "arabicName": "string",
      "key": "string",
      "accountTypes": [
        {
          "id": 0,
          "typeName": "string",
          "applicationRoleId": "string",
          "key": "string"
        }
      ]
    },
    "accountType": {
      "id": 0,
      "typeName": "string",
      "applicationRoleId": "string",
      "key": "string"
    },
    "emailVerifyToken": "string",
    "passResetToken": "string",
    "complaints": [
      {
        "id": 0,
        "applicaUserId": "string",
        "content": "string",
        "dateCreated": "2022-11-09T12:23:44.136Z"
      }
    ],
    "testimonials": [
      {
        "id": 0,
        "applicaUserId": "string",
        "content": "string",
        "stars": 0,
        "dateCreated": "2022-11-09T12:23:44.136Z"
      }
    ],
    "appointments": [
      {
        "id": 0,
        "applicationUserId": "string",
        "name": "string",
        "description": "string",
        "filePath": "string",
        "dateCreated": "2022-11-09T12:23:44.136Z",
        "appointmentFiles": [
          {
            "id": 0,
            "appointmentId": 0,
            "fileName": "string"
          }
        ]
      }
    ],
    "adminProfile": {
      "id": 0,
      "applicationUserId": "string",
      "firstName": "string",
      "lastName": "string",
      "profilePicture": "string",
      "dateCreated": "2022-11-09T12:23:44.136Z"
    },
    "isActive": true,
    "connectionId": "string",
    "accountActivationApplicationUserWhoTakeDecision": [
      {
        "id": 0,
        "applicationUserIdWhoTakeDecision": "string",
        "applicationUserId": "string",
        "isActive": true,
        "dateCreated": "2022-11-09T12:23:44.136Z"
      }
    ],
    "accountActivationApplicationUsers": [
      {
        "id": 0,
        "applicationUserIdWhoTakeDecision": "string",
        "applicationUserId": "string",
        "isActive": true,
        "dateCreated": "2022-11-09T12:23:44.136Z"
      }
    ],
    "messageReceivers": [
      {
        "id": 0,
        "messageTypeId": 0,
        "senderId": "string",
        "receiverId": "string",
        "content": "string",
        "dateCreated": "2022-11-09T12:23:44.137Z",
        "messageType": {
          "id": 0,
          "type": "string",
          "messages": [
            null
          ]
        }
      }
    ],
    "messageSenders": [
      {
        "id": 0,
        "messageTypeId": 0,
        "senderId": "string",
        "receiverId": "string",
        "content": "string",
        "dateCreated": "2022-11-09T12:23:44.137Z",
        "messageType": {
          "id": 0,
          "type": "string",
          "messages": [
            null
          ]
        }
      }
    ],
    "serviceProviderPartnerships": [
      {
        "id": 0,
        "applicationUserId": "string",
        "partnershipId": 0,
        "startedOnDate": "2022-11-09T12:23:44.137Z",
        "expiresOnDate": "2022-11-09T12:23:44.137Z",
        "partnership": {
          "id": 0,
          "title": "string",
          "description": "string",
          "price": 0,
          "duration": 0,
          "serviceProviderPartnerships": [
            null
          ]
        }
      }
    ],
    "roles": [
      {
        "id": "string",
        "name": "string",
        "normalizedName": "string",
        "concurrencyStamp": "string",
        "isActive": true,
        "arabicName": "string",
        "key": "string",
        "accountTypes": [
          {
            "id": 0,
            "typeName": "string",
            "applicationRoleId": "string",
            "key": "string"
          }
        ]
      }
    ]
  },
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
  "companyRegisterationNumberEndDate": "2022-11-09T12:23:44.137Z",
  "companyRegisterationNumberStartDate": "2022-11-09T12:23:44.137Z",
  "licenseEndDate": "2022-11-09T12:23:44.137Z",
  "licenseStartDate": "2022-11-09T12:23:44.137Z",
  "vatregistrationCertificateEndDate": "2022-11-09T12:23:44.137Z",
  "vatregistrationCertificateStartDate": "2022-11-09T12:23:44.137Z",
  "dateCreated": "2022-11-09T12:23:44.137Z",
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
  "professionLicenseStartDate": "2022-11-09T12:23:44.137Z",
  "professionLicenseEndDate": "2022-11-09T12:23:44.137Z",
  "socialInsuranceCertificateStartDate": "2022-11-09T12:23:44.137Z",
  "socialInsuranceCertificateEndDate": "2022-11-09T12:23:44.137Z",
  "classificationCertificateStartDate": "2022-11-09T12:23:44.137Z",
  "classificationCertificateEndDate": "2022-11-09T12:23:44.137Z",
  "addedValueRegisterationCertificateStartDate": "2022-11-09T12:23:44.137Z",
  "addedValueRegisterationCertificateEndDate": "2022-11-09T12:23:44.137Z",
  "zakatCertificateStartDate": "2022-11-09T12:23:44.137Z",
  "zakatCertificateEndDate": "2022-11-09T12:23:44.137Z",
  "isoNumber": "string",
  "isoStartDate": "2022-11-09T12:23:44.137Z",
  "isoEndDate": "2022-11-09T12:23:44.137Z",
  "financialStatementNumber": "string",
  "financialStatementStartDate": "2022-11-09T12:23:44.137Z",
  "financialStatementEndDate": "2022-11-09T12:23:44.137Z",
  "saudizationCertificateStartDate": "2022-11-09T12:23:44.137Z",
  "saudizationCertificateEndDate": "2022-11-09T12:23:44.137Z",
  "saudizationCertificateNumber": "string",
  "coCMembershipStartDate": "2022-11-09T12:23:44.137Z",
  "coCMembershipEndDate": "2022-11-09T12:23:44.137Z",
  "projectSubServiceId": 0,
  "accountOverview": "string",
  "profilePictureFile": "string",
  "bank": {
    "id": 0,
    "name": "string",
    "individualServiceProviderProfiles": [
      {
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
        "dateCreated": "2022-11-09T12:23:44.137Z",
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
        "bankAccountNumber": "string",
        "offers": [
          null
        ],
        "serviceProviderWorks": [
          null
        ],
        "profileCompleted": true,
        "profileCreated": true
      }
    ],
    "organizationalServiceProviderProfiles": [
      null
    ]
  },
  "companyClassification": {
    "id": 0,
    "name": "string",
    "individualServiceProviderProfiles": [
      {
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
        "dateCreated": "2022-11-09T12:23:44.137Z",
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
        "bankAccountNumber": "string",
        "offers": [
          null
        ],
        "serviceProviderWorks": [
          null
        ],
        "profileCompleted": true,
        "profileCreated": true
      }
    ],
    "organizationalServiceProviderProfiles": [
      null
    ]
  },
  "district": {
    "id": 0,
    "cityId": 0,
    "nameAr": "string",
    "nameEn": "string",
    "city": {
      "id": 0,
      "regionId": 0,
      "nameAr": "string",
      "nameEn": "string",
      "region": {
        "id": 0,
        "code": "string",
        "nameAr": "string",
        "nameEn": "string",
        "population": 0,
        "cities": [
          null
        ]
      },
      "districts": [
        null
      ]
    },
    "clientProfiles": [
      {
        "id": 0,
        "applicationUserId": "string",
        "firstName": "string",
        "lastName": "string",
        "idFile": "string",
        "neighborhood": "string",
        "streetName": "string",
        "buildingNumber": 0,
        "additionalNumber": 0,
        "postalCode": "string",
        "joinRequestStatusId": 0,
        "districtId": 0,
        "dateCreated": "2022-11-09T12:23:44.137Z",
        "idNumber": "string",
        "accountOverview": "string",
        "profilePictureFile": "string",
        "projects": [
          {
            "id": 0,
            "clientProfileId": 0,
            "projectServiceId": 0,
            "projectSubServiceId": 0,
            "name": "string",
            "projectCategoryId": 0,
            "projectSubCategoryId": 0,
            "districtId": 0,
            "plotNumber": "string",
            "organizationalChartNumber": "string",
            "area": 0,
            "subject": "string",
            "code": "string",
            "projectRequestStatusId": 0,
            "projectRequestStatus": {
              "id": 0,
              "rejectionReasonId": 0,
              "notes": "string",
              "projectStatusId": 0,
              "dateCreated": "2022-11-09T12:23:44.137Z",
              "projectStatus": {
                "id": 0,
                "nameAr": "string",
                "nameEn": "string",
                "typeId": 0,
                "isDisplayedForUsers": true,
                "projectRequestStatuses": [
                  null
                ]
              },
              "rejectionReason": {
                "id": 0,
                "name": "string",
                "projectRequestStatuses": [
                  null
                ]
              },
              "projects": [
                null
              ]
            },
            "dateCreated": "2022-11-09T12:23:44.137Z",
            "isOpenForOffers": true,
            "pricequoteEndDate": "2022-11-09T12:23:44.137Z",
            "requiredWorksNotes": "string",
            "projectCategory": {
              "id": 0,
              "name": "string",
              "projectSubCategories": [
                {
                  "id": 0,
                  "name": "string",
                  "projectCategoryId": 0,
                  "projects": [
                    null
                  ]
                }
              ],
              "projects": [
                null
              ],
              "serviceProviderWorks": [
                null
              ]
            },
            "projectSubCategory": {
              "id": 0,
              "name": "string",
              "projectCategoryId": 0,
              "projects": [
                null
              ]
            },
            "projectSubService": {
              "id": 0,
              "name": "string",
              "projectServiceId": 0,
              "ospprofileSubServices": [
                null
              ],
              "projects": [
                null
              ]
            },
            "clientProjectDocuments": [
              {
                "id": 0,
                "projectId": 0,
                "requiredDocumentId": 0,
                "file": "string",
                "dateCreated": "2022-11-09T12:23:44.137Z",
                "requiredDocument": {
                  "id": 0,
                  "requiredWorkId": 0,
                  "name": "string",
                  "identifier": "string",
                  "clientProjectDocuments": [
                    null
                  ]
                }
              }
            ],
            "negotiations": [
              {
                "id": 0,
                "projectId": 0,
                "senderId": "string",
                "receiverId": "string",
                "message": "string",
                "dateCreated": "2022-11-09T12:23:44.137Z"
              }
            ],
            "offers": [
              null
            ],
            "projectComponents": [
              {
                "projectId": 0,
                "componentId": 0,
                "component": {
                  "id": 0,
                  "name": "string",
                  "description": "string",
                  "projectComponents": [
                    null
                  ]
                }
              }
            ],
            "projectRequiredWorks": [
              {
                "projectId": 0,
                "requiredWorkId": 0
              }
            ],
            "projectLevels": [
              {
                "id": 0,
                "projectId": 0,
                "status": true,
                "isFinished": true,
                "fileName": "string",
                "content": "string",
                "imageName": "string",
                "levelName": "string"
              }
            ],
            "componentIds": [
              0
            ],
            "requiredWorkIds": [
              0
            ]
          }
        ]
      }
    ],
    "individualServiceProviderProfiles": [
      {
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
        "dateCreated": "2022-11-09T12:23:44.137Z",
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
        "bankAccountNumber": "string",
        "offers": [
          null
        ],
        "serviceProviderWorks": [
          null
        ],
        "profileCompleted": true,
        "profileCreated": true
      }
    ],
    "organizationalServiceProviderProfiles": [
      null
    ],
    "projects": [
      {
        "id": 0,
        "clientProfileId": 0,
        "projectServiceId": 0,
        "projectSubServiceId": 0,
        "name": "string",
        "projectCategoryId": 0,
        "projectSubCategoryId": 0,
        "districtId": 0,
        "plotNumber": "string",
        "organizationalChartNumber": "string",
        "area": 0,
        "subject": "string",
        "code": "string",
        "projectRequestStatusId": 0,
        "projectRequestStatus": {
          "id": 0,
          "rejectionReasonId": 0,
          "notes": "string",
          "projectStatusId": 0,
          "dateCreated": "2022-11-09T12:23:44.137Z",
          "projectStatus": {
            "id": 0,
            "nameAr": "string",
            "nameEn": "string",
            "typeId": 0,
            "isDisplayedForUsers": true,
            "projectRequestStatuses": [
              null
            ]
          },
          "rejectionReason": {
            "id": 0,
            "name": "string",
            "projectRequestStatuses": [
              null
            ]
          },
          "projects": [
            null
          ]
        },
        "dateCreated": "2022-11-09T12:23:44.137Z",
        "isOpenForOffers": true,
        "pricequoteEndDate": "2022-11-09T12:23:44.137Z",
        "requiredWorksNotes": "string",
        "projectCategory": {
          "id": 0,
          "name": "string",
          "projectSubCategories": [
            {
              "id": 0,
              "name": "string",
              "projectCategoryId": 0,
              "projects": [
                null
              ]
            }
          ],
          "projects": [
            null
          ],
          "serviceProviderWorks": [
            null
          ]
        },
        "projectSubCategory": {
          "id": 0,
          "name": "string",
          "projectCategoryId": 0,
          "projects": [
            null
          ]
        },
        "projectSubService": {
          "id": 0,
          "name": "string",
          "projectServiceId": 0,
          "ospprofileSubServices": [
            null
          ],
          "projects": [
            null
          ]
        },
        "clientProjectDocuments": [
          {
            "id": 0,
            "projectId": 0,
            "requiredDocumentId": 0,
            "file": "string",
            "dateCreated": "2022-11-09T12:23:44.137Z",
            "requiredDocument": {
              "id": 0,
              "requiredWorkId": 0,
              "name": "string",
              "identifier": "string",
              "clientProjectDocuments": [
                null
              ]
            }
          }
        ],
        "negotiations": [
          {
            "id": 0,
            "projectId": 0,
            "senderId": "string",
            "receiverId": "string",
            "message": "string",
            "dateCreated": "2022-11-09T12:23:44.137Z"
          }
        ],
        "offers": [
          null
        ],
        "projectComponents": [
          {
            "projectId": 0,
            "componentId": 0,
            "component": {
              "id": 0,
              "name": "string",
              "description": "string",
              "projectComponents": [
                null
              ]
            }
          }
        ],
        "projectRequiredWorks": [
          {
            "projectId": 0,
            "requiredWorkId": 0
          }
        ],
        "projectLevels": [
          {
            "id": 0,
            "projectId": 0,
            "status": true,
            "isFinished": true,
            "fileName": "string",
            "content": "string",
            "imageName": "string",
            "levelName": "string"
          }
        ],
        "componentIds": [
          0
        ],
        "requiredWorkIds": [
          0
        ]
      }
    ]
  },
  "joinRequestStatus": {
    "id": 0,
    "description": "string",
    "accountStatusId": 0,
    "dateCreated": "2022-11-09T12:23:44.137Z",
    "accountStatus": {
      "id": 0,
      "nameAr": "string",
      "nameEn": "string",
      "joinRequestStatuses": [
        null
      ]
    },
    "clientProfiles": [
      {
        "id": 0,
        "applicationUserId": "string",
        "firstName": "string",
        "lastName": "string",
        "idFile": "string",
        "neighborhood": "string",
        "streetName": "string",
        "buildingNumber": 0,
        "additionalNumber": 0,
        "postalCode": "string",
        "joinRequestStatusId": 0,
        "districtId": 0,
        "dateCreated": "2022-11-09T12:23:44.137Z",
        "idNumber": "string",
        "accountOverview": "string",
        "profilePictureFile": "string",
        "projects": [
          {
            "id": 0,
            "clientProfileId": 0,
            "projectServiceId": 0,
            "projectSubServiceId": 0,
            "name": "string",
            "projectCategoryId": 0,
            "projectSubCategoryId": 0,
            "districtId": 0,
            "plotNumber": "string",
            "organizationalChartNumber": "string",
            "area": 0,
            "subject": "string",
            "code": "string",
            "projectRequestStatusId": 0,
            "projectRequestStatus": {
              "id": 0,
              "rejectionReasonId": 0,
              "notes": "string",
              "projectStatusId": 0,
              "dateCreated": "2022-11-09T12:23:44.137Z",
              "projectStatus": {
                "id": 0,
                "nameAr": "string",
                "nameEn": "string",
                "typeId": 0,
                "isDisplayedForUsers": true,
                "projectRequestStatuses": [
                  null
                ]
              },
              "rejectionReason": {
                "id": 0,
                "name": "string",
                "projectRequestStatuses": [
                  null
                ]
              },
              "projects": [
                null
              ]
            },
            "dateCreated": "2022-11-09T12:23:44.137Z",
            "isOpenForOffers": true,
            "pricequoteEndDate": "2022-11-09T12:23:44.137Z",
            "requiredWorksNotes": "string",
            "projectCategory": {
              "id": 0,
              "name": "string",
              "projectSubCategories": [
                {
                  "id": 0,
                  "name": "string",
                  "projectCategoryId": 0,
                  "projects": [
                    null
                  ]
                }
              ],
              "projects": [
                null
              ],
              "serviceProviderWorks": [
                null
              ]
            },
            "projectSubCategory": {
              "id": 0,
              "name": "string",
              "projectCategoryId": 0,
              "projects": [
                null
              ]
            },
            "projectSubService": {
              "id": 0,
              "name": "string",
              "projectServiceId": 0,
              "ospprofileSubServices": [
                null
              ],
              "projects": [
                null
              ]
            },
            "clientProjectDocuments": [
              {
                "id": 0,
                "projectId": 0,
                "requiredDocumentId": 0,
                "file": "string",
                "dateCreated": "2022-11-09T12:23:44.137Z",
                "requiredDocument": {
                  "id": 0,
                  "requiredWorkId": 0,
                  "name": "string",
                  "identifier": "string",
                  "clientProjectDocuments": [
                    null
                  ]
                }
              }
            ],
            "negotiations": [
              {
                "id": 0,
                "projectId": 0,
                "senderId": "string",
                "receiverId": "string",
                "message": "string",
                "dateCreated": "2022-11-09T12:23:44.137Z"
              }
            ],
            "offers": [
              null
            ],
            "projectComponents": [
              {
                "projectId": 0,
                "componentId": 0,
                "component": {
                  "id": 0,
                  "name": "string",
                  "description": "string",
                  "projectComponents": [
                    null
                  ]
                }
              }
            ],
            "projectRequiredWorks": [
              {
                "projectId": 0,
                "requiredWorkId": 0
              }
            ],
            "projectLevels": [
              {
                "id": 0,
                "projectId": 0,
                "status": true,
                "isFinished": true,
                "fileName": "string",
                "content": "string",
                "imageName": "string",
                "levelName": "string"
              }
            ],
            "componentIds": [
              0
            ],
            "requiredWorkIds": [
              0
            ]
          }
        ]
      }
    ],
    "individualServiceProviderProfiles": [
      {
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
        "dateCreated": "2022-11-09T12:23:44.137Z",
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
        "bankAccountNumber": "string",
        "offers": [
          null
        ],
        "serviceProviderWorks": [
          null
        ],
        "profileCompleted": true,
        "profileCreated": true
      }
    ],
    "organizationalServiceProviderProfiles": [
      null
    ]
  },
  "representative": {
    "id": 0,
    "firstName": "string",
    "lastName": "string",
    "phoneNumber": "string",
    "email": "string",
    "organizationalServiceProviderProfileId": 0,
    "dateCreated": "2022-11-09T12:23:44.137Z"
  },
  "employees": [
    {
      "id": 0,
      "name": "string",
      "employeeLevelId": 0,
      "organizationalServiceProviderProfileId": 0,
      "dateCreated": "2022-11-09T12:23:44.137Z",
      "employeeLevel": {
        "id": 0,
        "name": "string",
        "employees": [
          null
        ]
      }
    }
  ],
  "offers": [
    {
      "id": 0,
      "projectId": 0,
      "period": "string",
      "cost": 0,
      "numberOfMilestones": 0,
      "contractorCommitments": "string",
      "sizingMethod": "string",
      "contractTerms": "string",
      "disputeResolution": "string",
      "message": "string",
      "dateCreated": "2022-11-09T12:23:44.137Z",
      "individualServiceProviderProfileId": 0,
      "organizationalServiceProviderProfileId": 0,
      "isAccepted": true,
      "offerEndDate": "2022-11-09T12:23:44.137Z",
      "individualServiceProviderProfile": {
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
        "dateCreated": "2022-11-09T12:23:44.137Z",
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
        "bankAccountNumber": "string",
        "offers": [
          null
        ],
        "serviceProviderWorks": [
          null
        ],
        "profileCompleted": true,
        "profileCreated": true
      },
      "project": {
        "id": 0,
        "clientProfileId": 0,
        "projectServiceId": 0,
        "projectSubServiceId": 0,
        "name": "string",
        "projectCategoryId": 0,
        "projectSubCategoryId": 0,
        "districtId": 0,
        "plotNumber": "string",
        "organizationalChartNumber": "string",
        "area": 0,
        "subject": "string",
        "code": "string",
        "projectRequestStatusId": 0,
        "projectRequestStatus": {
          "id": 0,
          "rejectionReasonId": 0,
          "notes": "string",
          "projectStatusId": 0,
          "dateCreated": "2022-11-09T12:23:44.137Z",
          "projectStatus": {
            "id": 0,
            "nameAr": "string",
            "nameEn": "string",
            "typeId": 0,
            "isDisplayedForUsers": true,
            "projectRequestStatuses": [
              null
            ]
          },
          "rejectionReason": {
            "id": 0,
            "name": "string",
            "projectRequestStatuses": [
              null
            ]
          },
          "projects": [
            null
          ]
        },
        "dateCreated": "2022-11-09T12:23:44.137Z",
        "isOpenForOffers": true,
        "pricequoteEndDate": "2022-11-09T12:23:44.137Z",
        "requiredWorksNotes": "string",
        "projectCategory": {
          "id": 0,
          "name": "string",
          "projectSubCategories": [
            {
              "id": 0,
              "name": "string",
              "projectCategoryId": 0,
              "projects": [
                null
              ]
            }
          ],
          "projects": [
            null
          ],
          "serviceProviderWorks": [
            null
          ]
        },
        "projectSubCategory": {
          "id": 0,
          "name": "string",
          "projectCategoryId": 0,
          "projects": [
            null
          ]
        },
        "projectSubService": {
          "id": 0,
          "name": "string",
          "projectServiceId": 0,
          "ospprofileSubServices": [
            null
          ],
          "projects": [
            null
          ]
        },
        "clientProjectDocuments": [
          {
            "id": 0,
            "projectId": 0,
            "requiredDocumentId": 0,
            "file": "string",
            "dateCreated": "2022-11-09T12:23:44.137Z",
            "requiredDocument": {
              "id": 0,
              "requiredWorkId": 0,
              "name": "string",
              "identifier": "string",
              "clientProjectDocuments": [
                null
              ]
            }
          }
        ],
        "negotiations": [
          {
            "id": 0,
            "projectId": 0,
            "senderId": "string",
            "receiverId": "string",
            "message": "string",
            "dateCreated": "2022-11-09T12:23:44.137Z"
          }
        ],
        "offers": [
          null
        ],
        "projectComponents": [
          {
            "projectId": 0,
            "componentId": 0,
            "component": {
              "id": 0,
              "name": "string",
              "description": "string",
              "projectComponents": [
                null
              ]
            }
          }
        ],
        "projectRequiredWorks": [
          {
            "projectId": 0,
            "requiredWorkId": 0
          }
        ],
        "projectLevels": [
          {
            "id": 0,
            "projectId": 0,
            "status": true,
            "isFinished": true,
            "fileName": "string",
            "content": "string",
            "imageName": "string",
            "levelName": "string"
          }
        ],
        "componentIds": [
          0
        ],
        "requiredWorkIds": [
          0
        ]
      },
      "materials": [
        {
          "id": 0,
          "offerId": 0,
          "materialTypeId": 0,
          "name": "string",
          "cost": "string",
          "description": "string",
          "materialType": {
            "id": 0,
            "name": "string",
            "materials": [
              null
            ]
          }
        }
      ],
      "milestones": [
        {
          "id": 0,
          "offerId": 0,
          "cost": 0,
          "percentage": 0,
          "isFirstMilestone": true
        }
      ],
      "negotiations": [
        {
          "id": 0,
          "projectId": 0,
          "senderId": "string",
          "receiverId": "string",
          "message": "string",
          "dateCreated": "2022-11-09T12:23:44.137Z"
        }
      ]
    }
  ],
  "ospprofileSubServices": [
    {
      "id": 0,
      "profileId": 0,
      "projectServiceId": 0,
      "projectSubServiceId": 0,
      "projectService": {
        "id": 0,
        "name": "string",
        "ospprofileSubServices": [
          null
        ],
        "projectServiceProjectServiceDocuments": [
          {
            "projectServiceDocumentsId": 0,
            "projectServicesId": 0,
            "projectServiceDocuments": {
              "id": 0,
              "name": "string",
              "path": "string",
              "projectServiceProjectServiceDocuments": [
                null
              ]
            }
          }
        ],
        "projectSubServices": [
          {
            "id": 0,
            "name": "string",
            "projectServiceId": 0,
            "ospprofileSubServices": [
              null
            ],
            "projects": [
              null
            ]
          }
        ],
        "projects": [
          {
            "id": 0,
            "clientProfileId": 0,
            "projectServiceId": 0,
            "projectSubServiceId": 0,
            "name": "string",
            "projectCategoryId": 0,
            "projectSubCategoryId": 0,
            "districtId": 0,
            "plotNumber": "string",
            "organizationalChartNumber": "string",
            "area": 0,
            "subject": "string",
            "code": "string",
            "projectRequestStatusId": 0,
            "projectRequestStatus": {
              "id": 0,
              "rejectionReasonId": 0,
              "notes": "string",
              "projectStatusId": 0,
              "dateCreated": "2022-11-09T12:23:44.137Z",
              "projectStatus": {
                "id": 0,
                "nameAr": "string",
                "nameEn": "string",
                "typeId": 0,
                "isDisplayedForUsers": true,
                "projectRequestStatuses": [
                  null
                ]
              },
              "rejectionReason": {
                "id": 0,
                "name": "string",
                "projectRequestStatuses": [
                  null
                ]
              },
              "projects": [
                null
              ]
            },
            "dateCreated": "2022-11-09T12:23:44.137Z",
            "isOpenForOffers": true,
            "pricequoteEndDate": "2022-11-09T12:23:44.137Z",
            "requiredWorksNotes": "string",
            "projectCategory": {
              "id": 0,
              "name": "string",
              "projectSubCategories": [
                {
                  "id": 0,
                  "name": "string",
                  "projectCategoryId": 0,
                  "projects": [
                    null
                  ]
                }
              ],
              "projects": [
                null
              ],
              "serviceProviderWorks": [
                null
              ]
            },
            "projectSubCategory": {
              "id": 0,
              "name": "string",
              "projectCategoryId": 0,
              "projects": [
                null
              ]
            },
            "projectSubService": {
              "id": 0,
              "name": "string",
              "projectServiceId": 0,
              "ospprofileSubServices": [
                null
              ],
              "projects": [
                null
              ]
            },
            "clientProjectDocuments": [
              {
                "id": 0,
                "projectId": 0,
                "requiredDocumentId": 0,
                "file": "string",
                "dateCreated": "2022-11-09T12:23:44.137Z",
                "requiredDocument": {
                  "id": 0,
                  "requiredWorkId": 0,
                  "name": "string",
                  "identifier": "string",
                  "clientProjectDocuments": [
                    null
                  ]
                }
              }
            ],
            "negotiations": [
              {
                "id": 0,
                "projectId": 0,
                "senderId": "string",
                "receiverId": "string",
                "message": "string",
                "dateCreated": "2022-11-09T12:23:44.137Z"
              }
            ],
            "offers": [
              null
            ],
            "projectComponents": [
              {
                "projectId": 0,
                "componentId": 0,
                "component": {
                  "id": 0,
                  "name": "string",
                  "description": "string",
                  "projectComponents": [
                    null
                  ]
                }
              }
            ],
            "projectRequiredWorks": [
              {
                "projectId": 0,
                "requiredWorkId": 0
              }
            ],
            "projectLevels": [
              {
                "id": 0,
                "projectId": 0,
                "status": true,
                "isFinished": true,
                "fileName": "string",
                "content": "string",
                "imageName": "string",
                "levelName": "string"
              }
            ],
            "componentIds": [
              0
            ],
            "requiredWorkIds": [
              0
            ]
          }
        ],
        "requiredWorks": [
          {
            "id": 0,
            "name": "string",
            "projectServiceId": 0,
            "projectRequiredWorks": [
              {
                "projectId": 0,
                "requiredWorkId": 0
              }
            ],
            "requiredDocuments": [
              {
                "id": 0,
                "requiredWorkId": 0,
                "name": "string",
                "identifier": "string",
                "clientProjectDocuments": [
                  null
                ]
              }
            ]
          }
        ],
        "organizationalServiceProviderProfiles": [
          null
        ]
      },
      "projectSubService": {
        "id": 0,
        "name": "string",
        "projectServiceId": 0,
        "ospprofileSubServices": [
          null
        ],
        "projects": [
          null
        ]
      }
    }
  ],
  "projectService": {
    "id": 0,
    "name": "string",
    "ospprofileSubServices": [
      null
    ],
    "projectServiceProjectServiceDocuments": [
      {
        "projectServiceDocumentsId": 0,
        "projectServicesId": 0,
        "projectServiceDocuments": {
          "id": 0,
          "name": "string",
          "path": "string",
          "projectServiceProjectServiceDocuments": [
            null
          ]
        }
      }
    ],
    "projectSubServices": [
      {
        "id": 0,
        "name": "string",
        "projectServiceId": 0,
        "ospprofileSubServices": [
          null
        ],
        "projects": [
          null
        ]
      }
    ],
    "projects": [
      {
        "id": 0,
        "clientProfileId": 0,
        "projectServiceId": 0,
        "projectSubServiceId": 0,
        "name": "string",
        "projectCategoryId": 0,
        "projectSubCategoryId": 0,
        "districtId": 0,
        "plotNumber": "string",
        "organizationalChartNumber": "string",
        "area": 0,
        "subject": "string",
        "code": "string",
        "projectRequestStatusId": 0,
        "projectRequestStatus": {
          "id": 0,
          "rejectionReasonId": 0,
          "notes": "string",
          "projectStatusId": 0,
          "dateCreated": "2022-11-09T12:23:44.137Z",
          "projectStatus": {
            "id": 0,
            "nameAr": "string",
            "nameEn": "string",
            "typeId": 0,
            "isDisplayedForUsers": true,
            "projectRequestStatuses": [
              null
            ]
          },
          "rejectionReason": {
            "id": 0,
            "name": "string",
            "projectRequestStatuses": [
              null
            ]
          },
          "projects": [
            null
          ]
        },
        "dateCreated": "2022-11-09T12:23:44.137Z",
        "isOpenForOffers": true,
        "pricequoteEndDate": "2022-11-09T12:23:44.137Z",
        "requiredWorksNotes": "string",
        "projectCategory": {
          "id": 0,
          "name": "string",
          "projectSubCategories": [
            {
              "id": 0,
              "name": "string",
              "projectCategoryId": 0,
              "projects": [
                null
              ]
            }
          ],
          "projects": [
            null
          ],
          "serviceProviderWorks": [
            null
          ]
        },
        "projectSubCategory": {
          "id": 0,
          "name": "string",
          "projectCategoryId": 0,
          "projects": [
            null
          ]
        },
        "projectSubService": {
          "id": 0,
          "name": "string",
          "projectServiceId": 0,
          "ospprofileSubServices": [
            null
          ],
          "projects": [
            null
          ]
        },
        "clientProjectDocuments": [
          {
            "id": 0,
            "projectId": 0,
            "requiredDocumentId": 0,
            "file": "string",
            "dateCreated": "2022-11-09T12:23:44.137Z",
            "requiredDocument": {
              "id": 0,
              "requiredWorkId": 0,
              "name": "string",
              "identifier": "string",
              "clientProjectDocuments": [
                null
              ]
            }
          }
        ],
        "negotiations": [
          {
            "id": 0,
            "projectId": 0,
            "senderId": "string",
            "receiverId": "string",
            "message": "string",
            "dateCreated": "2022-11-09T12:23:44.137Z"
          }
        ],
        "offers": [
          null
        ],
        "projectComponents": [
          {
            "projectId": 0,
            "componentId": 0,
            "component": {
              "id": 0,
              "name": "string",
              "description": "string",
              "projectComponents": [
                null
              ]
            }
          }
        ],
        "projectRequiredWorks": [
          {
            "projectId": 0,
            "requiredWorkId": 0
          }
        ],
        "projectLevels": [
          {
            "id": 0,
            "projectId": 0,
            "status": true,
            "isFinished": true,
            "fileName": "string",
            "content": "string",
            "imageName": "string",
            "levelName": "string"
          }
        ],
        "componentIds": [
          0
        ],
        "requiredWorkIds": [
          0
        ]
      }
    ],
    "requiredWorks": [
      {
        "id": 0,
        "name": "string",
        "projectServiceId": 0,
        "projectRequiredWorks": [
          {
            "projectId": 0,
            "requiredWorkId": 0
          }
        ],
        "requiredDocuments": [
          {
            "id": 0,
            "requiredWorkId": 0,
            "name": "string",
            "identifier": "string",
            "clientProjectDocuments": [
              null
            ]
          }
        ]
      }
    ],
    "organizationalServiceProviderProfiles": [
      null
    ]
  },
  "serviceProviderWorks": [
    {
      "id": 0,
      "identifier": "string",
      "projectCategoryId": 0,
      "projectName": "string",
      "ownerName": "string",
      "projectPrice": 0,
      "completionYear": 0,
      "individualServiceProviderProfileId": 0,
      "organizationalServiceProviderProfileId": 0,
      "dateCreated": "2022-11-09T12:23:44.138Z",
      "serviceProviderWorkFiles": [
        {
          "id": 0,
          "serviceProviderWorkId": 0,
          "file": "string",
          "dateCreated": "2022-11-09T12:23:44.138Z"
        }
      ],
      "individualServiceProviderProfile": {
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
        "dateCreated": "2022-11-09T12:23:44.138Z",
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
        "bankAccountNumber": "string",
        "offers": [
          null
        ],
        "serviceProviderWorks": [
          null
        ],
        "profileCompleted": true,
        "profileCreated": true
      },
      "projectCategory": {
        "id": 0,
        "name": "string",
        "projectSubCategories": [
          {
            "id": 0,
            "name": "string",
            "projectCategoryId": 0,
            "projects": [
              null
            ]
          }
        ],
        "projects": [
          null
        ],
        "serviceProviderWorks": [
          null
        ]
      }
    }
  ],
  "profileCompleted": true,
  "profileCreated": true
}
