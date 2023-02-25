import { usePageContext } from '../../context/PageContext';
import ActionDetail from './ActionDetail';
import ContentDetail from './ContentDetail';
import HeadDetail from './HeadDetail';

const AnimeDetail = () => {
    const { currentPage, pageDetailData } = usePageContext();
    const isCurrentPage = currentPage.title === 'Anime Detail';

    return (
        <div hidden={!isCurrentPage} className={coreStyle}>
            <HeadDetail media={pageDetailData} />
            <ContentDetail media={pageDetailData} />
            <ActionDetail media={pageDetailData} />
        </div>
    );
};
const coreStyle = 'w-auto h-screen flex flex-col items-start p-3 gap-3';

export default AnimeDetail;
