export interface PageResponse {
    Page: Page;
}

export interface Page {
    media: Media[];
}

export interface Media {
    coverImage: {
        color: string;
        medium: string;
    };
    title: {
        romaji: string;
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
}
