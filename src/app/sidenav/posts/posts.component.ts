import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '../../services/graphql.service';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { Query, Post, CoverImage } from '../../models/blogpost';
import gql from 'graphql-tag';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-angular-link-http/HttpLink';
import { trigger, state, transition, style, animate } from '@angular/animations';

const getPosts = gql `{
  posts {
    id
    updatedAt
    title
    slug
    coverImage {
      handle
    }
  }
}`;


@Component({
  selector: 'app-home',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class PostsComponent implements OnInit {


  constructor(private gservice: GraphqlService, private apollo: Apollo) {}
  postsSubscription: Subscription;
  posts: Post[] = [];

  ngOnInit() {
    this.postsSubscription = this.apollo.subscribe({
      query: getPosts
    }).subscribe(({ data }) => {
      this.posts =  data.posts;
    }
    );
  }


}
