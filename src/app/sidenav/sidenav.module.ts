import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavComponent } from './nav/nav.component';
import { PostsComponent } from './posts/posts.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav.component';
import { ParticleBackgroundComponent } from '../particle-background/particle-background.component';
import { ParticlesModule } from 'angular-particle';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    SidenavComponent,
    ToolbarComponent,
    NavComponent,
    PostsComponent,
    FooterComponent,
    ParticleBackgroundComponent,
    ContactComponent,
    PostDetailComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MaterialModule,
    ParticlesModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    SidenavComponent
  ]
})
export class SidenavModule { }
