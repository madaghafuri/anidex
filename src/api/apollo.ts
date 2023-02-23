import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const apolloClient = new ApolloClient({
    uri: 'https://graphql.anilist.co',
    cache: new InMemoryCache(),
});

export const GET_PAGE = gql`
    {
        Page(page: 1, perPage: 10) {
            media(type: MANGA) {
                coverImage {
                    medium
                    color
                }
                title {
                    romaji
                }
                updatedAt
                status
                volumes
                favourites
            }
        }
    }
`;
