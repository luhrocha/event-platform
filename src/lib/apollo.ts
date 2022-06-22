import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({uri: 'https://api-sa-east-1.graphcms.com/v2/cl4orebsw0we701xk20ta8tqk/master', cache: new InMemoryCache()});
