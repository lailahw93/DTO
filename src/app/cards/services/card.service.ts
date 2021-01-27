import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {delay} from 'rxjs/operators';
import {CardItem} from '../../store/models/card-item.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private CARD_URL = 'http://localhost:3000/cards';

  constructor(private http: HttpClient) {
  }

  getcardItems() {
    return this.http.get<Array<CardItem>>(this.CARD_URL)
      .pipe(
        delay(500)
      );
  }

  addcardItem(cardItem: CardItem) {
    return this.http.post(this.CARD_URL, cardItem)
      .pipe(
        delay(500)
      );
  }

  deletecardItem(id: string) {
    return this.http.delete(`${this.CARD_URL}/${id}`)
      .pipe(
        delay(500)
      );
  }
}
