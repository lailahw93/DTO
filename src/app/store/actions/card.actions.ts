import {Action} from '@ngrx/store';
import {CardItem} from '../models/card-item.model';

export enum CardActionTypes {
  LOAD_CARD = '[CARD] Load Cards',
  LOAD_CARD_SUCCESS = '[CARD] Load Cards Success',
  LOAD_CARD_FAILURE = '[CARD] Load Cards Failure',
  ADD_ITEM = '[CARD] Add Item',
  ADD_ITEM_SUCCESS = '[CARD] Add Item Success',
  ADD_ITEM_FAILURE = '[CARD] Add Item Failure',

}

export class LoadCardAction implements Action {
  readonly type = CardActionTypes.LOAD_CARD;
}

export class LoadCardSuccessAction implements Action {
  readonly type = CardActionTypes.LOAD_CARD_SUCCESS;

  constructor(public payload: Array<CardItem>) {
  }

}

export class LoadCardFailureAction implements Action {
  readonly type = CardActionTypes.LOAD_CARD_FAILURE;

  constructor(public payload: Error) {
  }
}

export class AddItemAction implements Action {
  readonly type = CardActionTypes.ADD_ITEM;

  constructor(public payload: CardItem) {
  }
}

export class AddItemSuccessAction implements Action {
  readonly type = CardActionTypes.ADD_ITEM_SUCCESS;

  constructor(public payload: CardItem) {
  }
}

export class AddItemFailureAction implements Action {
  readonly type = CardActionTypes.ADD_ITEM_FAILURE;

  constructor(public payload: Error) {
  }
}


export type CardAction = AddItemAction |
  AddItemSuccessAction |
  AddItemFailureAction |
  LoadCardAction |
  LoadCardFailureAction |
  LoadCardSuccessAction;
