import { AbstractControl } from "@angular/forms";




export const stringWithOnlyNumbers = (control: AbstractControl): {[key: string]: boolean} | null=>{
    const regex = new RegExp('^[0-9]*$');
    if(!regex.test(control.value)){
        return {invalidStringOfNumbers: true}
    }
    return null
}