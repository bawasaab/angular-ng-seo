import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListingComponent } from "./post-listing/post-listing.component";
import { PostDetailsComponent } from "./post-details/post-details.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: PostListingComponent
  },
  {
    path: 'jobs/:postId',
    component: PostDetailsComponent
  },
  {
    path: '**',
    component: PostListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
