import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Post } from 'src/app/models/blogpost';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


const getPost = gql`
query singlePost($slug: String!) {
    post (where: {slug: $slug}) {
      id
      slug
      title
      updatedAt
      coverImage {
        handle
      }
      content {
        text
        html
      }
    }
}`;

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  constructor(private apollo: Apollo, private route: ActivatedRoute, private location: Location) { }

  postSubscription: Subscription;
  post: Post;
  urlSlug: any;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.urlSlug = params['id'];
    });

    this.postSubscription = this.apollo.watchQuery({
      query: getPost,
      variables: {
        slug: this.urlSlug
      },
    }).valueChanges.subscribe(({ data }) => {
      this.post =  data['post'];
    });

  }

  Back() {
    this.location.back();
  }

}
