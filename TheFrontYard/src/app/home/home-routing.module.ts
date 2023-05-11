import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { FeedPageModule } from './Post/feed/feed.module';
import { CreatePageModule } from './Post/create/create.module';
import { ProfilePageModule } from './profile/profile.module';
import { SearchPageModule } from './search/search.module';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'feed',
        loadChildren: () => FeedPageModule
      },
      {
        path: 'create',
        loadChildren: () => CreatePageModule
      },
      {
        path: 'profile',
        loadChildren: () => ProfilePageModule
      },
      {
        path: 'search',
        loadChildren: () => SearchPageModule
      },
      {
        path: '',
        redirectTo: '/home/feed',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
