import { atom } from 'jotai';
import { FC } from 'react';
import { Media } from '../api/types';
import AnimeList from '../components/anime/AnimeList';

type Page =
    | 'Anime List'
    | 'Collection List'
    | 'Anime Detail'
    | 'Collection Detail';

interface CurrentPage {
    title: Page;
    page: FC;
}

export const currentPage = atom<CurrentPage | null>(null);
