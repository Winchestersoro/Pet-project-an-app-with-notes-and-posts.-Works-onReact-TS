import {getArrayPages} from '../../utils/pages'
interface pagination {
    totalPage: number
    page : number
    changePage: (page:number) => void
}

const Pagination = ({totalPage, page, changePage}:pagination) => {
    
    const pagesArray = getArrayPages(totalPage);

    return (
        <div className='page__wrapper'>
      {pagesArray.map(p => 
        <span
        onClick={()=>changePage(p)}
        key={p} 
        className={page === p 
            ? 'page page__current'
            : 'page'}> {p} </span>
      )}
      </div>
    );
};

export default Pagination;