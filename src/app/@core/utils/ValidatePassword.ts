
import { AbstractControl } from "@angular/forms";


export const strongPassword = (control: AbstractControl): {[key: string]: boolean} | null=>{
    const regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
    if(!regex.test(control.value)){
        return {inValidPassword: true}
    }
    return null
}