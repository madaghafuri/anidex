import { atom } from 'jotai';
import { FC } from 'react';

export type Page =
    | 'Anime List'
    | 'Collection List'
    | 'Anime Detail'
    | 'Collection Detail';

export interface CurrentPage {
    title: Page;
    page: FC;
}

export const currentPage = atom<CurrentPage | null>(null);
