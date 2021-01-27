import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {CardEffects} from './store/effects/card.effects';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {ToastrModule} from 'ngx-toastr';

import {AppRoutingModule} from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatNativeDateModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {CardReducer} from './store/reducers/card.reducer';
import {CardComponent} from './cards/components/card/card.component';
import {PageNotFoundComponent} from './cards/components/page-not-found/page-not-found.component';
import {CardListComponent} from './cards/components/card-list/card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PageNotFoundComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    BrowserModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ToastrModule.forRoot(),
    FormsModule,
    EffectsModule.forRoot([CardEffects]),
    StoreModule.forRoot({
      cards: CardReducer
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
