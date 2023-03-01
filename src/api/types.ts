export interface PageResponse {
    Page: Page;
}

export interface Page {
    pageInfo: PageInfo;
    media: Media[];
}

export interface PageInfo {
    currentPage: number;
    lastPage: number;
}

export interface Media {
    id: number;
    coverImage: {
        color: string;
        medium: string;
    };
    title: {
        userPreferred: string;
        english: string;
    };
    updatedAt: number;
    status:
        | 'FINISHED'
        | 'RELEASING'
        | 'NOT_YET_RELEASED'
        | 'CANCELLED'
        | 'HIATUS';
    volumes: number;
    favourites: number;
    bannerImage: string;
    genres: string[];
    description: string;
    averageScore: number;
}
