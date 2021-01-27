import {CardState} from '../reducers/card.reducer';

export interface AppState {
  readonly cards: CardState;
}
