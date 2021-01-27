import {FormControl} from "@angular/forms";
import * as moment from "moment";

export function DateValidator(): any {
  return (control: FormControl): { [key: string]: any } => {
   
    var a = moment();
    var b = moment(control.value);
    const diff = b.diff(a, 'hours')


    if (diff <= 0) {

      return {invalidDate: true};
    }

    return null;
  };
}
