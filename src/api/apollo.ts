import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const apolloClient = new ApolloClient({
    uri: 'https://graphql.anilist.co',
    cache: new InMemoryCache(),
});

export const getPageQuery = (pageNumber: number) => {
    return gql`
    {
        Page(page: ${pageNumber}, perPage: 10) {
            pageInfo {
                currentPage
                lastPage
            }
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
};
