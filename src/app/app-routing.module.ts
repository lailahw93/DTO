import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CardListComponent} from './cards/components/card-list/card-list.component';
import {CardComponent} from './cards/components/card/card.component';
import {PageNotFoundComponent} from './cards/components/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', component: CardListComponent},
  {path: 'add', component: CardComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
