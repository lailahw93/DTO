import {FormControl} from '@angular/forms';
import * as moment from 'moment';

export function isNumber(): any {
  return (control: FormControl): { [key: string]: any } => {

    const match = /^-?(0|[1-9]\d*)?$/.exec(control.value);


    if (!match) {

      return {isNotNumber: true};
    }

    return null;
  };
}
