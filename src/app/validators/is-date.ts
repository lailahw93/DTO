import {FormControl} from "@angular/forms";
import * as moment from "moment";

export function isDate(): any {
  return (control: FormControl): { [key: string]: any } => {

   
    const date = moment(control.value);

    
    if (!date.isValid()) {

      return {isNotDate: true};
    }

    return null;
  };
}
