import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostsListComponent } from './pages/posts-list/posts-list.component';

const routes: Routes = [{
    path: 'posts-list',
    component: PostsListComponent,
  }, {
    path: 'posts-list/:id',
    component: PostDetailsComponent,
  }, {
  path: '**',
  redirectTo: 'posts-list'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
