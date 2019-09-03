import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './sidenav/posts/posts.component';
import { PostDetailComponent } from './sidenav/posts/post-detail/post-detail.component';
import { ContactComponent } from './sidenav/contact/contact.component';
import { HomeComponent } from './sidenav/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'posts', component: PostsComponent },
  {path: 'post/:id', component: PostDetailComponent },
  {path: 'contact', component: ContactComponent },
  {path: '**', component: PostsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
