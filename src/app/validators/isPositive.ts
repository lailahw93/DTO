import {FormControl} from '@angular/forms';
import * as moment from 'moment';

export function isPositive(): any {
  return (control: FormControl): { [key: string]: any } => {

    if (Number(control.value) < 0) {
      return {isNotPositive: true};
    } else {
      return null;
    }
  };
}
