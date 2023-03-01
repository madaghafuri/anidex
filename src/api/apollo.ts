import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const apolloClient = new ApolloClient({
    uri: 'https://graphql.anilist.co',
    cache: new InMemoryCache(),
});

export const GET_PAGE = gql`
    {
        Page(page: 1, perPage: 21) {
            media(type: MANGA) {
                id
                coverImage {
                    medium
                    color
                }
                title {
                    userPreferred
                    english
                }
                updatedAt
                status
                volumes
                favourites
                bannerImage
                genres
                description
                averageScore
            }
        }
    }
`;
