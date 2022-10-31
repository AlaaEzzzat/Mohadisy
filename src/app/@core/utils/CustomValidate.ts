import { AbstractControl } from '@angular/forms';
import * as moment from 'moment';
import { FormGroup } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';


export function lessThanToday (control: AbstractControl): {[key: string]: boolean} | null {
    const currentDate = moment(new Date()).format("YYYY-MM-DD")
    if(control.value===currentDate || control.value>currentDate){
        return {invalidDate: true}
    }
    return null
}

export const rangeDateValidator = (from: string, to: string): ValidatorFn => {
    return (control: AbstractControl): {[key: string]: boolean} | null => {
        const form = control as FormGroup;
        const fromDate = form.get(from)?.value;
        const toDate = form.get(to)?.value;
        const currentDate = moment(new Date()).format("YYYY-MM-DD");

        if(fromDate>= currentDate){
            form.get(from)?.setErrors({invalidDate: true})
        }
        if(toDate>= currentDate){
            form.get(to)?.setErrors({invalidDate: true})
        }
        if(fromDate === toDate){
            return {invalidRange: true}
        }
        if(fromDate > toDate){
            return {outRange: true}
        }
        return null
    }
}


