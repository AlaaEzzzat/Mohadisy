export interface IprofileAdmin {

id:number,
applicationUserId : string;

  userName?: 'Mohandisy';
  normalizedUserName?: 'MOHANDISY';
  email?: 'admin@mohandisy.com';
  normalizedEmail?: 'ADMIN@MOHANDISY.COM';
  phoneNumber?: '016466454';
  firstName ?: any;
  lastName ?: any;


  adminProfile: {
    id : number;
    applicationUserId : string;
    firstName ?: any;
    lastName ?: any;
    profilePicture ?: string;
    dateCreated ?: any;
    profilePicturePath ?: string;
  };



}
