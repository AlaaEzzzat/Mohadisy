export interface Indivdual {

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
      "lockoutEnd": "2022-11-09T10:23:45.827Z",
      "lockoutEnabled": true,
      "accessFailedCount": 0,
      "id": "string",
      "roleId": "string",
      "accountId": 0,
      "organizationalServiceProviderProfile": {
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
        "companyRegisterationNumberEndDate": "2022-11-09T10:23:45.827Z",
        "companyRegisterationNumberStartDate": "2022-11-09T10:23:45.827Z",
        "licenseEndDate": "2022-11-09T10:23:45.827Z",
        "licenseStartDate": "2022-11-09T10:23:45.827Z",
        "vatregistrationCertificateEndDate": "2022-11-09T10:23:45.827Z",
        "vatregistrationCertificateStartDate": "2022-11-09T10:23:45.827Z",
        "dateCreated": "2022-11-09T10:23:45.827Z",
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
        "professionLicenseStartDate": "2022-11-09T10:23:45.827Z",
        "professionLicenseEndDate": "2022-11-09T10:23:45.827Z",
        "socialInsuranceCertificateStartDate": "2022-11-09T10:23:45.827Z",
        "socialInsuranceCertificateEndDate": "2022-11-09T10:23:45.827Z",
        "classificationCertificateStartDate": "2022-11-09T10:23:45.827Z",
        "classificationCertificateEndDate": "2022-11-09T10:23:45.827Z",
        "addedValueRegisterationCertificateStartDate": "2022-11-09T10:23:45.827Z",
        "addedValueRegisterationCertificateEndDate": "2022-11-09T10:23:45.827Z",
        "zakatCertificateStartDate": "2022-11-09T10:23:45.827Z",
        "zakatCertificateEndDate": "2022-11-09T10:23:45.827Z",
        "isoNumber": "string",
        "isoStartDate": "2022-11-09T10:23:45.827Z",
        "isoEndDate": "2022-11-09T10:23:45.827Z",
        "financialStatementNumber": "string",
        "financialStatementStartDate": "2022-11-09T10:23:45.827Z",
        "financialStatementEndDate": "2022-11-09T10:23:45.827Z",
        "saudizationCertificateStartDate": "2022-11-09T10:23:45.827Z",
        "saudizationCertificateEndDate": "2022-11-09T10:23:45.827Z",
        "saudizationCertificateNumber": "string",
        "coCMembershipStartDate": "2022-11-09T10:23:45.827Z",
        "coCMembershipEndDate": "2022-11-09T10:23:45.827Z",
        "projectSubServiceId": 0,
        "accountOverview": "string",
        "profilePictureFile": "string",
        "representative": {
          "id": 0,
          "firstName": "string",
          "lastName": "string",
          "phoneNumber": "string",
          "email": "string",
          "organizationalServiceProviderProfileId": 0,
          "dateCreated": "2022-11-09T10:23:45.827Z"
        },
        "employees": [
          {
            "id": 0,
            "name": "string",
            "employeeLevelId": 0,
            "organizationalServiceProviderProfileId": 0,
            "dateCreated": "2022-11-09T10:23:45.827Z",
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
          null
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
                null
              ],
              "requiredWorks": [
                {
                  "id": 0,
                  "name": "string",
                  "projectServiceId": 0,
                  "projectRequiredWorks": [
                    null
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
            null
          ],
          "requiredWorks": [
            {
              "id": 0,
              "name": "string",
              "projectServiceId": 0,
              "projectRequiredWorks": [
                null
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
        "dateCreated": "2022-11-09T10:23:45.827Z",
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
              "dateCreated": "2022-11-09T10:23:45.827Z",
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
            "dateCreated": "2022-11-09T10:23:45.827Z",
            "isOpenForOffers": true,
            "pricequoteEndDate": "2022-11-09T10:23:45.827Z",
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
                null
              ],
              "requiredWorks": [
                {
                  "id": 0,
                  "name": "string",
                  "projectServiceId": 0,
                  "projectRequiredWorks": [
                    null
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
                "dateCreated": "2022-11-09T10:23:45.827Z",
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
                "dateCreated": "2022-11-09T10:23:45.827Z"
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
                "requiredWorkId": 0,
                "requiredWork": {
                  "id": 0,
                  "name": "string",
                  "projectServiceId": 0,
                  "projectRequiredWorks": [
                    null
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
          "dateCreated": "2022-11-09T10:23:45.827Z"
        }
      ],
      "testimonials": [
        {
          "id": 0,
          "applicaUserId": "string",
          "content": "string",
          "stars": 0,
          "dateCreated": "2022-11-09T10:23:45.827Z"
        }
      ],
      "appointments": [
        {
          "id": 0,
          "applicationUserId": "string",
          "name": "string",
          "description": "string",
          "filePath": "string",
          "dateCreated": "2022-11-09T10:23:45.827Z",
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
        "dateCreated": "2022-11-09T10:23:45.827Z"
      },
      "isActive": true,
      "connectionId": "string",
      "accountActivationApplicationUserWhoTakeDecision": [
        {
          "id": 0,
          "applicationUserIdWhoTakeDecision": "string",
          "applicationUserId": "string",
          "isActive": true,
          "dateCreated": "2022-11-09T10:23:45.827Z"
        }
      ],
      "accountActivationApplicationUsers": [
        {
          "id": 0,
          "applicationUserIdWhoTakeDecision": "string",
          "applicationUserId": "string",
          "isActive": true,
          "dateCreated": "2022-11-09T10:23:45.827Z"
        }
      ],
      "messageReceivers": [
        {
          "id": 0,
          "messageTypeId": 0,
          "senderId": "string",
          "receiverId": "string",
          "content": "string",
          "dateCreated": "2022-11-09T10:23:45.827Z",
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
          "dateCreated": "2022-11-09T10:23:45.827Z",
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
          "startedOnDate": "2022-11-09T10:23:45.827Z",
          "expiresOnDate": "2022-11-09T10:23:45.827Z",
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
    "dateCreated": "2022-11-09T10:23:45.827Z",
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
    "bank": {
      "id": 0,
      "name": "string",
      "individualServiceProviderProfiles": [
        null
      ],
      "organizationalServiceProviderProfiles": [
        {
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
          "companyRegisterationNumberEndDate": "2022-11-09T10:23:45.828Z",
          "companyRegisterationNumberStartDate": "2022-11-09T10:23:45.828Z",
          "licenseEndDate": "2022-11-09T10:23:45.828Z",
          "licenseStartDate": "2022-11-09T10:23:45.828Z",
          "vatregistrationCertificateEndDate": "2022-11-09T10:23:45.828Z",
          "vatregistrationCertificateStartDate": "2022-11-09T10:23:45.828Z",
          "dateCreated": "2022-11-09T10:23:45.828Z",
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
          "professionLicenseStartDate": "2022-11-09T10:23:45.828Z",
          "professionLicenseEndDate": "2022-11-09T10:23:45.828Z",
          "socialInsuranceCertificateStartDate": "2022-11-09T10:23:45.828Z",
          "socialInsuranceCertificateEndDate": "2022-11-09T10:23:45.828Z",
          "classificationCertificateStartDate": "2022-11-09T10:23:45.828Z",
          "classificationCertificateEndDate": "2022-11-09T10:23:45.828Z",
          "addedValueRegisterationCertificateStartDate": "2022-11-09T10:23:45.828Z",
          "addedValueRegisterationCertificateEndDate": "2022-11-09T10:23:45.828Z",
          "zakatCertificateStartDate": "2022-11-09T10:23:45.828Z",
          "zakatCertificateEndDate": "2022-11-09T10:23:45.828Z",
          "isoNumber": "string",
          "isoStartDate": "2022-11-09T10:23:45.828Z",
          "isoEndDate": "2022-11-09T10:23:45.828Z",
          "financialStatementNumber": "string",
          "financialStatementStartDate": "2022-11-09T10:23:45.828Z",
          "financialStatementEndDate": "2022-11-09T10:23:45.828Z",
          "saudizationCertificateStartDate": "2022-11-09T10:23:45.828Z",
          "saudizationCertificateEndDate": "2022-11-09T10:23:45.828Z",
          "saudizationCertificateNumber": "string",
          "coCMembershipStartDate": "2022-11-09T10:23:45.828Z",
          "coCMembershipEndDate": "2022-11-09T10:23:45.828Z",
          "projectSubServiceId": 0,
          "accountOverview": "string",
          "profilePictureFile": "string",
          "representative": {
            "id": 0,
            "firstName": "string",
            "lastName": "string",
            "phoneNumber": "string",
            "email": "string",
            "organizationalServiceProviderProfileId": 0,
            "dateCreated": "2022-11-09T10:23:45.828Z"
          },
          "employees": [
            {
              "id": 0,
              "name": "string",
              "employeeLevelId": 0,
              "organizationalServiceProviderProfileId": 0,
              "dateCreated": "2022-11-09T10:23:45.828Z",
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
            null
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
                  null
                ],
                "requiredWorks": [
                  {
                    "id": 0,
                    "name": "string",
                    "projectServiceId": 0,
                    "projectRequiredWorks": [
                      null
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
              null
            ],
            "requiredWorks": [
              {
                "id": 0,
                "name": "string",
                "projectServiceId": 0,
                "projectRequiredWorks": [
                  null
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
            null
          ],
          "profileCompleted": true,
          "profileCreated": true
        }
      ]
    },
    "companyClassification": {
      "id": 0,
      "name": "string",
      "individualServiceProviderProfiles": [
        null
      ],
      "organizationalServiceProviderProfiles": [
        {
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
          "companyRegisterationNumberEndDate": "2022-11-09T10:23:45.828Z",
          "companyRegisterationNumberStartDate": "2022-11-09T10:23:45.828Z",
          "licenseEndDate": "2022-11-09T10:23:45.828Z",
          "licenseStartDate": "2022-11-09T10:23:45.828Z",
          "vatregistrationCertificateEndDate": "2022-11-09T10:23:45.828Z",
          "vatregistrationCertificateStartDate": "2022-11-09T10:23:45.828Z",
          "dateCreated": "2022-11-09T10:23:45.828Z",
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
          "professionLicenseStartDate": "2022-11-09T10:23:45.828Z",
          "professionLicenseEndDate": "2022-11-09T10:23:45.828Z",
          "socialInsuranceCertificateStartDate": "2022-11-09T10:23:45.828Z",
          "socialInsuranceCertificateEndDate": "2022-11-09T10:23:45.828Z",
          "classificationCertificateStartDate": "2022-11-09T10:23:45.828Z",
          "classificationCertificateEndDate": "2022-11-09T10:23:45.828Z",
          "addedValueRegisterationCertificateStartDate": "2022-11-09T10:23:45.828Z",
          "addedValueRegisterationCertificateEndDate": "2022-11-09T10:23:45.828Z",
          "zakatCertificateStartDate": "2022-11-09T10:23:45.828Z",
          "zakatCertificateEndDate": "2022-11-09T10:23:45.828Z",
          "isoNumber": "string",
          "isoStartDate": "2022-11-09T10:23:45.828Z",
          "isoEndDate": "2022-11-09T10:23:45.828Z",
          "financialStatementNumber": "string",
          "financialStatementStartDate": "2022-11-09T10:23:45.828Z",
          "financialStatementEndDate": "2022-11-09T10:23:45.828Z",
          "saudizationCertificateStartDate": "2022-11-09T10:23:45.828Z",
          "saudizationCertificateEndDate": "2022-11-09T10:23:45.828Z",
          "saudizationCertificateNumber": "string",
          "coCMembershipStartDate": "2022-11-09T10:23:45.828Z",
          "coCMembershipEndDate": "2022-11-09T10:23:45.828Z",
          "projectSubServiceId": 0,
          "accountOverview": "string",
          "profilePictureFile": "string",
          "representative": {
            "id": 0,
            "firstName": "string",
            "lastName": "string",
            "phoneNumber": "string",
            "email": "string",
            "organizationalServiceProviderProfileId": 0,
            "dateCreated": "2022-11-09T10:23:45.828Z"
          },
          "employees": [
            {
              "id": 0,
              "name": "string",
              "employeeLevelId": 0,
              "organizationalServiceProviderProfileId": 0,
              "dateCreated": "2022-11-09T10:23:45.828Z",
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
            null
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
                  null
                ],
                "requiredWorks": [
                  {
                    "id": 0,
                    "name": "string",
                    "projectServiceId": 0,
                    "projectRequiredWorks": [
                      null
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
              null
            ],
            "requiredWorks": [
              {
                "id": 0,
                "name": "string",
                "projectServiceId": 0,
                "projectRequiredWorks": [
                  null
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
            null
          ],
          "profileCompleted": true,
          "profileCreated": true
        }
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
          "dateCreated": "2022-11-09T10:23:45.828Z",
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
                "dateCreated": "2022-11-09T10:23:45.828Z",
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
              "dateCreated": "2022-11-09T10:23:45.828Z",
              "isOpenForOffers": true,
              "pricequoteEndDate": "2022-11-09T10:23:45.828Z",
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
                  null
                ],
                "requiredWorks": [
                  {
                    "id": 0,
                    "name": "string",
                    "projectServiceId": 0,
                    "projectRequiredWorks": [
                      null
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
                  "dateCreated": "2022-11-09T10:23:45.828Z",
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
                  "dateCreated": "2022-11-09T10:23:45.828Z"
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
                  "requiredWorkId": 0,
                  "requiredWork": {
                    "id": 0,
                    "name": "string",
                    "projectServiceId": 0,
                    "projectRequiredWorks": [
                      null
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
        null
      ],
      "organizationalServiceProviderProfiles": [
        {
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
          "companyRegisterationNumberEndDate": "2022-11-09T10:23:45.828Z",
          "companyRegisterationNumberStartDate": "2022-11-09T10:23:45.828Z",
          "licenseEndDate": "2022-11-09T10:23:45.828Z",
          "licenseStartDate": "2022-11-09T10:23:45.828Z",
          "vatregistrationCertificateEndDate": "2022-11-09T10:23:45.828Z",
          "vatregistrationCertificateStartDate": "2022-11-09T10:23:45.828Z",
          "dateCreated": "2022-11-09T10:23:45.828Z",
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
          "professionLicenseStartDate": "2022-11-09T10:23:45.828Z",
          "professionLicenseEndDate": "2022-11-09T10:23:45.828Z",
          "socialInsuranceCertificateStartDate": "2022-11-09T10:23:45.828Z",
          "socialInsuranceCertificateEndDate": "2022-11-09T10:23:45.828Z",
          "classificationCertificateStartDate": "2022-11-09T10:23:45.828Z",
          "classificationCertificateEndDate": "2022-11-09T10:23:45.828Z",
          "addedValueRegisterationCertificateStartDate": "2022-11-09T10:23:45.828Z",
          "addedValueRegisterationCertificateEndDate": "2022-11-09T10:23:45.828Z",
          "zakatCertificateStartDate": "2022-11-09T10:23:45.828Z",
          "zakatCertificateEndDate": "2022-11-09T10:23:45.828Z",
          "isoNumber": "string",
          "isoStartDate": "2022-11-09T10:23:45.828Z",
          "isoEndDate": "2022-11-09T10:23:45.828Z",
          "financialStatementNumber": "string",
          "financialStatementStartDate": "2022-11-09T10:23:45.828Z",
          "financialStatementEndDate": "2022-11-09T10:23:45.828Z",
          "saudizationCertificateStartDate": "2022-11-09T10:23:45.828Z",
          "saudizationCertificateEndDate": "2022-11-09T10:23:45.828Z",
          "saudizationCertificateNumber": "string",
          "coCMembershipStartDate": "2022-11-09T10:23:45.828Z",
          "coCMembershipEndDate": "2022-11-09T10:23:45.828Z",
          "projectSubServiceId": 0,
          "accountOverview": "string",
          "profilePictureFile": "string",
          "representative": {
            "id": 0,
            "firstName": "string",
            "lastName": "string",
            "phoneNumber": "string",
            "email": "string",
            "organizationalServiceProviderProfileId": 0,
            "dateCreated": "2022-11-09T10:23:45.828Z"
          },
          "employees": [
            {
              "id": 0,
              "name": "string",
              "employeeLevelId": 0,
              "organizationalServiceProviderProfileId": 0,
              "dateCreated": "2022-11-09T10:23:45.828Z",
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
            null
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
                  null
                ],
                "requiredWorks": [
                  {
                    "id": 0,
                    "name": "string",
                    "projectServiceId": 0,
                    "projectRequiredWorks": [
                      null
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
              null
            ],
            "requiredWorks": [
              {
                "id": 0,
                "name": "string",
                "projectServiceId": 0,
                "projectRequiredWorks": [
                  null
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
            null
          ],
          "profileCompleted": true,
          "profileCreated": true
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
            "dateCreated": "2022-11-09T10:23:45.828Z",
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
          "dateCreated": "2022-11-09T10:23:45.828Z",
          "isOpenForOffers": true,
          "pricequoteEndDate": "2022-11-09T10:23:45.828Z",
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
              null
            ],
            "requiredWorks": [
              {
                "id": 0,
                "name": "string",
                "projectServiceId": 0,
                "projectRequiredWorks": [
                  null
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
              "dateCreated": "2022-11-09T10:23:45.828Z",
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
              "dateCreated": "2022-11-09T10:23:45.828Z"
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
              "requiredWorkId": 0,
              "requiredWork": {
                "id": 0,
                "name": "string",
                "projectServiceId": 0,
                "projectRequiredWorks": [
                  null
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
      "dateCreated": "2022-11-09T10:23:45.828Z",
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
          "dateCreated": "2022-11-09T10:23:45.828Z",
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
                "dateCreated": "2022-11-09T10:23:45.828Z",
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
              "dateCreated": "2022-11-09T10:23:45.828Z",
              "isOpenForOffers": true,
              "pricequoteEndDate": "2022-11-09T10:23:45.828Z",
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
                  null
                ],
                "requiredWorks": [
                  {
                    "id": 0,
                    "name": "string",
                    "projectServiceId": 0,
                    "projectRequiredWorks": [
                      null
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
                  "dateCreated": "2022-11-09T10:23:45.828Z",
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
                  "dateCreated": "2022-11-09T10:23:45.828Z"
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
                  "requiredWorkId": 0,
                  "requiredWork": {
                    "id": 0,
                    "name": "string",
                    "projectServiceId": 0,
                    "projectRequiredWorks": [
                      null
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
        null
      ],
      "organizationalServiceProviderProfiles": [
        {
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
          "companyRegisterationNumberEndDate": "2022-11-09T10:23:45.828Z",
          "companyRegisterationNumberStartDate": "2022-11-09T10:23:45.828Z",
          "licenseEndDate": "2022-11-09T10:23:45.828Z",
          "licenseStartDate": "2022-11-09T10:23:45.828Z",
          "vatregistrationCertificateEndDate": "2022-11-09T10:23:45.828Z",
          "vatregistrationCertificateStartDate": "2022-11-09T10:23:45.828Z",
          "dateCreated": "2022-11-09T10:23:45.828Z",
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
          "professionLicenseStartDate": "2022-11-09T10:23:45.828Z",
          "professionLicenseEndDate": "2022-11-09T10:23:45.829Z",
          "socialInsuranceCertificateStartDate": "2022-11-09T10:23:45.829Z",
          "socialInsuranceCertificateEndDate": "2022-11-09T10:23:45.829Z",
          "classificationCertificateStartDate": "2022-11-09T10:23:45.829Z",
          "classificationCertificateEndDate": "2022-11-09T10:23:45.829Z",
          "addedValueRegisterationCertificateStartDate": "2022-11-09T10:23:45.829Z",
          "addedValueRegisterationCertificateEndDate": "2022-11-09T10:23:45.829Z",
          "zakatCertificateStartDate": "2022-11-09T10:23:45.829Z",
          "zakatCertificateEndDate": "2022-11-09T10:23:45.829Z",
          "isoNumber": "string",
          "isoStartDate": "2022-11-09T10:23:45.829Z",
          "isoEndDate": "2022-11-09T10:23:45.829Z",
          "financialStatementNumber": "string",
          "financialStatementStartDate": "2022-11-09T10:23:45.829Z",
          "financialStatementEndDate": "2022-11-09T10:23:45.829Z",
          "saudizationCertificateStartDate": "2022-11-09T10:23:45.829Z",
          "saudizationCertificateEndDate": "2022-11-09T10:23:45.829Z",
          "saudizationCertificateNumber": "string",
          "coCMembershipStartDate": "2022-11-09T10:23:45.829Z",
          "coCMembershipEndDate": "2022-11-09T10:23:45.829Z",
          "projectSubServiceId": 0,
          "accountOverview": "string",
          "profilePictureFile": "string",
          "representative": {
            "id": 0,
            "firstName": "string",
            "lastName": "string",
            "phoneNumber": "string",
            "email": "string",
            "organizationalServiceProviderProfileId": 0,
            "dateCreated": "2022-11-09T10:23:45.829Z"
          },
          "employees": [
            {
              "id": 0,
              "name": "string",
              "employeeLevelId": 0,
              "organizationalServiceProviderProfileId": 0,
              "dateCreated": "2022-11-09T10:23:45.829Z",
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
            null
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
                  null
                ],
                "requiredWorks": [
                  {
                    "id": 0,
                    "name": "string",
                    "projectServiceId": 0,
                    "projectRequiredWorks": [
                      null
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
              null
            ],
            "requiredWorks": [
              {
                "id": 0,
                "name": "string",
                "projectServiceId": 0,
                "projectRequiredWorks": [
                  null
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
            null
          ],
          "profileCompleted": true,
          "profileCreated": true
        }
      ]
    },
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
        "dateCreated": "2022-11-09T10:23:45.829Z",
        "individualServiceProviderProfileId": 0,
        "organizationalServiceProviderProfileId": 0,
        "isAccepted": true,
        "offerEndDate": "2022-11-09T10:23:45.829Z",
        "organizationalServiceProviderProfile": {
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
          "companyRegisterationNumberEndDate": "2022-11-09T10:23:45.829Z",
          "companyRegisterationNumberStartDate": "2022-11-09T10:23:45.829Z",
          "licenseEndDate": "2022-11-09T10:23:45.829Z",
          "licenseStartDate": "2022-11-09T10:23:45.829Z",
          "vatregistrationCertificateEndDate": "2022-11-09T10:23:45.829Z",
          "vatregistrationCertificateStartDate": "2022-11-09T10:23:45.829Z",
          "dateCreated": "2022-11-09T10:23:45.829Z",
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
          "professionLicenseStartDate": "2022-11-09T10:23:45.829Z",
          "professionLicenseEndDate": "2022-11-09T10:23:45.829Z",
          "socialInsuranceCertificateStartDate": "2022-11-09T10:23:45.829Z",
          "socialInsuranceCertificateEndDate": "2022-11-09T10:23:45.829Z",
          "classificationCertificateStartDate": "2022-11-09T10:23:45.829Z",
          "classificationCertificateEndDate": "2022-11-09T10:23:45.829Z",
          "addedValueRegisterationCertificateStartDate": "2022-11-09T10:23:45.829Z",
          "addedValueRegisterationCertificateEndDate": "2022-11-09T10:23:45.829Z",
          "zakatCertificateStartDate": "2022-11-09T10:23:45.829Z",
          "zakatCertificateEndDate": "2022-11-09T10:23:45.829Z",
          "isoNumber": "string",
          "isoStartDate": "2022-11-09T10:23:45.829Z",
          "isoEndDate": "2022-11-09T10:23:45.829Z",
          "financialStatementNumber": "string",
          "financialStatementStartDate": "2022-11-09T10:23:45.829Z",
          "financialStatementEndDate": "2022-11-09T10:23:45.829Z",
          "saudizationCertificateStartDate": "2022-11-09T10:23:45.829Z",
          "saudizationCertificateEndDate": "2022-11-09T10:23:45.829Z",
          "saudizationCertificateNumber": "string",
          "coCMembershipStartDate": "2022-11-09T10:23:45.829Z",
          "coCMembershipEndDate": "2022-11-09T10:23:45.829Z",
          "projectSubServiceId": 0,
          "accountOverview": "string",
          "profilePictureFile": "string",
          "representative": {
            "id": 0,
            "firstName": "string",
            "lastName": "string",
            "phoneNumber": "string",
            "email": "string",
            "organizationalServiceProviderProfileId": 0,
            "dateCreated": "2022-11-09T10:23:45.829Z"
          },
          "employees": [
            {
              "id": 0,
              "name": "string",
              "employeeLevelId": 0,
              "organizationalServiceProviderProfileId": 0,
              "dateCreated": "2022-11-09T10:23:45.829Z",
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
            null
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
                  null
                ],
                "requiredWorks": [
                  {
                    "id": 0,
                    "name": "string",
                    "projectServiceId": 0,
                    "projectRequiredWorks": [
                      null
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
              null
            ],
            "requiredWorks": [
              {
                "id": 0,
                "name": "string",
                "projectServiceId": 0,
                "projectRequiredWorks": [
                  null
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
            "dateCreated": "2022-11-09T10:23:45.829Z",
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
          "dateCreated": "2022-11-09T10:23:45.829Z",
          "isOpenForOffers": true,
          "pricequoteEndDate": "2022-11-09T10:23:45.829Z",
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
              null
            ],
            "requiredWorks": [
              {
                "id": 0,
                "name": "string",
                "projectServiceId": 0,
                "projectRequiredWorks": [
                  null
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
              "dateCreated": "2022-11-09T10:23:45.829Z",
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
              "dateCreated": "2022-11-09T10:23:45.829Z"
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
              "requiredWorkId": 0,
              "requiredWork": {
                "id": 0,
                "name": "string",
                "projectServiceId": 0,
                "projectRequiredWorks": [
                  null
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
            "dateCreated": "2022-11-09T10:23:45.829Z"
          }
        ]
      }
    ],
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
        "dateCreated": "2022-11-09T10:23:45.829Z",
        "serviceProviderWorkFiles": [
          {
            "id": 0,
            "serviceProviderWorkId": 0,
            "file": "string",
            "dateCreated": "2022-11-09T10:23:45.829Z"
          }
        ],
        "organizationalServiceProviderProfile": {
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
          "companyRegisterationNumberEndDate": "2022-11-09T10:23:45.829Z",
          "companyRegisterationNumberStartDate": "2022-11-09T10:23:45.829Z",
          "licenseEndDate": "2022-11-09T10:23:45.829Z",
          "licenseStartDate": "2022-11-09T10:23:45.829Z",
          "vatregistrationCertificateEndDate": "2022-11-09T10:23:45.829Z",
          "vatregistrationCertificateStartDate": "2022-11-09T10:23:45.829Z",
          "dateCreated": "2022-11-09T10:23:45.829Z",
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
          "professionLicenseStartDate": "2022-11-09T10:23:45.829Z",
          "professionLicenseEndDate": "2022-11-09T10:23:45.829Z",
          "socialInsuranceCertificateStartDate": "2022-11-09T10:23:45.829Z",
          "socialInsuranceCertificateEndDate": "2022-11-09T10:23:45.829Z",
          "classificationCertificateStartDate": "2022-11-09T10:23:45.829Z",
          "classificationCertificateEndDate": "2022-11-09T10:23:45.829Z",
          "addedValueRegisterationCertificateStartDate": "2022-11-09T10:23:45.829Z",
          "addedValueRegisterationCertificateEndDate": "2022-11-09T10:23:45.829Z",
          "zakatCertificateStartDate": "2022-11-09T10:23:45.829Z",
          "zakatCertificateEndDate": "2022-11-09T10:23:45.829Z",
          "isoNumber": "string",
          "isoStartDate": "2022-11-09T10:23:45.829Z",
          "isoEndDate": "2022-11-09T10:23:45.829Z",
          "financialStatementNumber": "string",
          "financialStatementStartDate": "2022-11-09T10:23:45.829Z",
          "financialStatementEndDate": "2022-11-09T10:23:45.829Z",
          "saudizationCertificateStartDate": "2022-11-09T10:23:45.829Z",
          "saudizationCertificateEndDate": "2022-11-09T10:23:45.829Z",
          "saudizationCertificateNumber": "string",
          "coCMembershipStartDate": "2022-11-09T10:23:45.829Z",
          "coCMembershipEndDate": "2022-11-09T10:23:45.829Z",
          "projectSubServiceId": 0,
          "accountOverview": "string",
          "profilePictureFile": "string",
          "representative": {
            "id": 0,
            "firstName": "string",
            "lastName": "string",
            "phoneNumber": "string",
            "email": "string",
            "organizationalServiceProviderProfileId": 0,
            "dateCreated": "2022-11-09T10:23:45.829Z"
          },
          "employees": [
            {
              "id": 0,
              "name": "string",
              "employeeLevelId": 0,
              "organizationalServiceProviderProfileId": 0,
              "dateCreated": "2022-11-09T10:23:45.829Z",
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
            null
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
                  null
                ],
                "requiredWorks": [
                  {
                    "id": 0,
                    "name": "string",
                    "projectServiceId": 0,
                    "projectRequiredWorks": [
                      null
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
              null
            ],
            "requiredWorks": [
              {
                "id": 0,
                "name": "string",
                "projectServiceId": 0,
                "projectRequiredWorks": [
                  null
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
