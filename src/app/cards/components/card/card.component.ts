import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {ToastrService} from 'ngx-toastr';
import {Observable} from 'rxjs';
import {AddItemAction} from 'src/app/store/actions/card.actions';
import {AppState} from 'src/app/store/models/app-state.model';
import * as moment from 'moment';
import {DateValidator} from 'src/app/validators/greater-than-current-date';
import {isNumber} from 'src/app/validators/is-number';
import {isPositive} from 'src/app/validators/isPositive';
import { isString } from 'src/app/validators/is-string';
import { isDate } from 'src/app/validators/is-date';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  loading$: Observable<Boolean>;
  error$: Observable<Error>;
  message$: Observable<string>;


  cardForm = new FormGroup({});

  constructor(private store: Store<AppState>, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.loading$ = this.store.select(store => store.cards.loading);
    this.error$ = this.store.select(store => store.cards.error);
    this.message$ = this.store.select(store => store.cards.message);

    this.cardForm = new FormGroup({
      'creditCardNumber': new FormControl('', [Validators.required,isString()]),
      'cardHolder': new FormControl('', [Validators.required,isString()]),
      'securityCode': new FormControl('', [Validators.minLength(3),isString(),Validators.maxLength(3)]),
      'amount': new FormControl('', [Validators.required,isNumber(), isPositive()]),
      'expectedDate': new FormControl('', [Validators.required,isDate(), DateValidator()])
    });

  }


  addItem() {
    this.store.dispatch(new AddItemAction(this.cardForm.value));
 }

  hasError(controlName) {
    if (this.cardForm.controls[controlName].errors != null ||
      this.cardForm.controls[controlName].dirty
    ) {
      return true;
    }
    return false;
  }

  getErrorMessage(controlName) {

    const errorObj = this.cardForm.get(controlName).errors;
   
    if (errorObj && errorObj.isNotString) {

      return 'Please enter a string';
    }

    if (errorObj && errorObj.isNotDate) {

      return 'Please enter a Date';
    }

    if (errorObj && errorObj.isNotNumber) {

      return 'Please enter a number';
    }

    if (errorObj && errorObj.isNotPositive) {

      return 'Please enter a positive number';
    }
    if (errorObj && errorObj.required) {
      return 'This field is reqiured';
    }

  
    if (errorObj && errorObj.invalidDate) {

      return 'Please enter a date greater than current date';
    }


    if (errorObj && errorObj.minlength) {

      return 'This field length should not be less than ' + errorObj.minlength.requiredLength;
    }
    if (errorObj && errorObj.maxlength) {

      return 'This field length should not be more than ' + errorObj.maxlength.requiredLength;
    }


  }
}
