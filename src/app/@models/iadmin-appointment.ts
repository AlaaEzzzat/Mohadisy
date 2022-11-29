export interface IadminAppointment {
      "id": 0,
      "applicationUserId": "string",
      "name": "string",
      "description": "string",
      "filePath": "string",
      "dateCreated": "2022-11-29T08:05:44.919Z",
      "appointmentFiles": [
        {
          "id": 0,
          "appointmentId": 0,
          "fileName": "string"
        }
      ],
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
        "lockoutEnd": "2022-11-29T08:05:44.919Z",
        "lockoutEnabled": true,
        "accessFailedCount": 0,
        "id": "string",
        "roleId": "string",
        "accountId": 0,
        "organizationalServiceProviderProfile": {},
        "individualServiceProviderProfile": {},
        "clientProfile":{},
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
            "applicationUserId": "string",
            "content": "string",
            "dateCreated": "2022-11-29T08:05:44.920Z",
            "complaintSenderId": "string"
          }
        ],
        "testimonials": [
          {
            "id": 0,
            "applicationUserId": "string",
            "content": "string",
            "stars": 0,
            "dateCreated": "2022-11-29T08:05:44.920Z"
          }
        ],
        "appointments": [
          null
        ],
        "adminProfile": {
          "id": 0,
          "applicationUserId": "string",
          "firstName": "string",
          "lastName": "string",
          "profilePicture": "string",
          "dateCreated": "2022-11-29T08:05:44.920Z"
        },
        "isActive": true,
        "connectionId": "string",
        "accountActivationApplicationUserWhoTakeDecision": [
          {
            "id": 0,
            "applicationUserIdWhoTakeDecision": "string",
            "applicationUserId": "string",
            "isActive": true,
            "dateCreated": "2022-11-29T08:05:44.920Z"
          }
        ],
        "accountActivationApplicationUsers": [
          {
            "id": 0,
            "applicationUserIdWhoTakeDecision": "string",
            "applicationUserId": "string",
            "isActive": true,
            "dateCreated": "2022-11-29T08:05:44.920Z"
          }
        ],
        "messageReceivers": [
          {
            "id": 0,
            "messageTypeId": 0,
            "senderId": "string",
            "receiverId": "string",
            "content": "string",
            "dateCreated": "2022-11-29T08:05:44.920Z",
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
            "dateCreated": "2022-11-29T08:05:44.920Z",
            "messageType": {
              "id": 0,
              "type": "string",
              "messages": [
                null
              ]
            }
          }
        ],
        "notificationSenders": [
          {
            "id": 0,
            "content": "string",
            "date": "2022-11-29T08:05:44.920Z",
            "senderId": "string",
            "notificationData": [
              {
                "id": 0,
                "isReaded": true,
                "reciverId": "string",
                "notificationId": 0
              }
            ]
          }
        ],
        "serviceProviderPartnerships": [
          {
            "id": 0,
            "applicationUserId": "string",
            "partnershipId": 0,
            "startedOnDate": "2022-11-29T08:05:44.920Z",
            "expiresOnDate": "2022-11-29T08:05:44.920Z",
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
      }
    }
