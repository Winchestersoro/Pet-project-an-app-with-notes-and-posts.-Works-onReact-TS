
import { useEffect, useRef, useState } from 'react';
import PostList from '../components/PostList/PostList';
import PostForm from '../components/PostForm/PostForm';
import PostFilter from '../components/PostFilter/PostFilter';
import TheModal from '../components/TheModal/TheModal';
import TheButton from '../components/UI/button/TheButton';
import { usePosts } from '../hooks/usePosts';
import Loader from '../components/UI/Loader/Loader';
import PostServise from '../components/API/PostServise';
import useFetching from '../hooks/useFetching';
import {getPageCount } from '../components/utils/pages';
import Pagination from '../components/UI/pagination/pagination';
interface Post {
  id: number;
  title: string;
  body: string;
}
function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElem = useRef()
  const observer = useRef();

  const { fetching: fetchPosts, isLoading, error: postError } = useFetching({
    callback: async () => {
      const response = await PostServise.getAll(limit, page);
      setPosts([...posts , ...response.data]  );
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount({ totalCount: Number(totalCount), limit }));
    }
  });

  useEffect(() => {
    if(isLoading) return;
    if(observer.current) observer.current.disconnect()
    let callback = function(entires, observer){
      if (entires[0].isIntersecting && page < totalPages) {
        setPage(page + 1)
      }
    }
    observer.current = new IntersectionObserver(callback)
    observer.current.observe(lastElem.current)
  },[isLoading])

  useEffect(() => {
    fetchPosts(); 
  }, [page]); 

  const changePage = (page:number) =>{ 
    setPage(page)
  }
  const createPost = (newPost: Post) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = (post: Post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };
  return (
    <div className='App'>
      
      <TheButton onClick={() => setModal(true)}>Создать пост</TheButton>
      <TheModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </TheModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      { postError &&
       <div className="error">{postError}</div>
      }
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Post List' />
      <div ref={lastElem} style={{height: 20, background:'red'}}></div>
      {isLoading &&
          
        <div className='load'>
          <Loader />
        </div>
      }
      
      <Pagination 
        page={page}
        changePage={changePage}
        totalPage={totalPages}
       />
    </div>
  );
}
export default Posts;