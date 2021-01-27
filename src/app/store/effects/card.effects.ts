import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, mergeMap, catchError} from 'rxjs/operators';

import {
  LoadCardAction, CardActionTypes, LoadCardSuccessAction,
  LoadCardFailureAction, AddItemAction, AddItemSuccessAction, AddItemFailureAction
} from '../actions/card.actions';
import {of} from 'rxjs';

import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {CardService} from 'src/app/cards/services/card.service';

@Injectable()
export class CardEffects {

  @Effect() loadCard$ = this.actions$
    .pipe(
      ofType<LoadCardAction>(CardActionTypes.LOAD_CARD),
      mergeMap(
        () => this.cardService.getcardItems()
          .pipe(
            map(data => {
              return new LoadCardSuccessAction(data);
            }),
            catchError(error => of(new LoadCardFailureAction(error)))
          )
      ),
    );

  @Effect() addCardItem$ = this.actions$
    .pipe(
      ofType<AddItemAction>(CardActionTypes.ADD_ITEM),
      mergeMap(
        (data) => this.cardService.addcardItem(data.payload)
          .pipe(
            map(() => {
              this.toastr.success('Item Added Successfuly');
              this.router.navigateByUrl('');
              return new AddItemSuccessAction(data.payload);
            }),
            catchError(error => of(new AddItemFailureAction(error)))
          )
      )
    );


  constructor(
    private actions$: Actions,
    private toastr: ToastrService,
    private router: Router,
    private cardService: CardService
  ) {
  }
}
