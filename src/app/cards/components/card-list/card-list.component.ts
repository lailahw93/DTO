import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

import * as moment from "moment";
import { Router } from '@angular/router';
import { CardItem } from 'src/app/store/models/card-item.model';
import { AppState } from 'src/app/store/models/app-state.model';
import {  LoadCardAction } from 'src/app/store/actions/card.actions';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  
  cardsItems$: Observable<Array<CardItem>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;
  message$: Observable<string>;


  constructor(private store: Store<AppState>,
    private router : Router) { }

  ngOnInit() {
   
    this.cardsItems$ = this.store.select(store => store.cards.list);
    this.loading$ = this.store.select(store => store.cards.loading);
    this.error$ = this.store.select(store => store.cards.error);
    this.message$ = this.store.select(store => store.cards.message);

    this.store.dispatch(new LoadCardAction());
  }

  addItem() {
  this.router.navigateByUrl('add')
  }

  dateFormat(date: Date){
    return moment(date).format('MM/D/YYYY')
  }
  
}