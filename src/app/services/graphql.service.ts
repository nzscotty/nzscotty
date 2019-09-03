import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'apollo-link';
import { Query, Post, CoverImage } from '../models/blogpost';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  data: any[];
  loading = true;
  error: any;



  constructor(private apollo: Apollo) { }


  GetBlogPosts() {
    this.apollo
      .watchQuery({
        query: gql`
        {
          posts {
            id
            date
            title
            slug
            coverImage {
              id
            }
            status
          }
        }
        `,
      })
      .valueChanges.subscribe(result => {
        return result.data["Post"];
        // this.data = result.data && result.data['data'];
        // this.loading = result.loading;
        // this.error = result['error'];
      });
  }
  // Query(appQuery: string): Observable<any> {
  //   this.apollo
  //     .watchQuery({
  //       query: gql`
  //         {`
  //         +  appQuery +
  //         `}
  //       `,
  //     })
  //     .valueChanges.subscribe(result => {
  //       return result;
  //       // this.data = result.data && result.data['data'];
  //       // this.loading = result.loading;
  //       // this.error = result['error'];
  //     });
  // }

  // Mutation(appMutation: string)

}
