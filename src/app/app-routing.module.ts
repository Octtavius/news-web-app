import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavouritesComponent } from './favourites/favourites.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { HomeComponent } from './home/home.component';
import { SourcesComponent } from './sources/sources.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'headlines',
    component: HeadlinesComponent
  },
  {
    path: 'sources',
    component: SourcesComponent
  },
  {
    path: 'favourites',
    component: FavouritesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
