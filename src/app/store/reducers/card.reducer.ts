import {ToastrService} from 'ngx-toastr';
import {CardActionTypes, CardAction} from '../actions/card.actions';

import {CardItem} from '../models/card-item.model';


export interface CardState {
  list: CardItem[];
  loading: boolean;
  error: Error;
  message: string;
}

const initialState: CardState = {
  list: [],
  loading: false,
  error: undefined,
  message: ''
};


export function CardReducer(state: CardState = initialState, action: CardAction) {
  switch (action.type) {
    case CardActionTypes.LOAD_CARD:
      return {
        ...state,
        loading: true
      };
    case CardActionTypes.LOAD_CARD_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      };

    case CardActionTypes.LOAD_CARD_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case CardActionTypes.ADD_ITEM:
      return {
        ...state,
        loading: true
      };
    case CardActionTypes.ADD_ITEM_SUCCESS:


      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false,
        message: 'Add Item Successfuly'
      };
    case CardActionTypes.ADD_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        message: 'Add Item Failure'
      };

    default:
      return state;
  }
}
