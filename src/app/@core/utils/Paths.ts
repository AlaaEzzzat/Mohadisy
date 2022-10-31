import { environment } from "src/environments/environment"


export const Paths = {
  APIRole:`${environment.baseUrl}/api/Role/getRoles`,
  APILogin: `${environment.baseUrl}/api/Authenticate/userLogin`,
  APISignup: `${environment.baseUrl}/api/Authenticate/userRegister`,
  APIForgetPassword: `${environment.baseUrl}/api/Authenticate/getResetPasswordToken?email=`,
  APIResetPassword: `${environment.baseUrl}/api/Authenticate/getResetPasswordToken?email=`,


};
