import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';

const uri = 'https://api-apeast.graphcms.com/v1/cjxq3rdp902au01f058w3oj1m/master'; // <-- add the URL of the GraphQL server here

const sendGridKey = "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";

const authLink = new ApolloLink((operation, forward) => {
  // Get the authentication token from local storage if it exists
// tslint:disable-next-line: max-line-length
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiMjVjNjBiYWItYjQwZC00NWQ3LWI4MWItZjYyYmFiYjE0MTFlIn0.MGefRrm945UbtMdedmNU6PRnFGgyzPgA5n14rf1hOhE'

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
      link: {uri},
      headers: {
          'Authorization': token ? `Bearer ${token}` : ''
      }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

export function createApollo(httpLink: HttpLink) {
  return {
    link: authLink.concat(httpLink.create({uri: 'https://api-apeast.graphcms.com/v1/cjxq3rdp902au01f058w3oj1m/master'})),
    // link: httpLink.create({uri}),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
