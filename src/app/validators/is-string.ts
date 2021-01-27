import {FormControl} from '@angular/forms';
import * as moment from 'moment';

export function isString(): any {
  return (control: FormControl): { [key: string]: any } => {

    const  match =new RegExp(/^[a-zA-Z0-9]/).exec(control.value)
    

    if (!match) {

      return {isNotString: true};
    }

    return null;
  };
}
