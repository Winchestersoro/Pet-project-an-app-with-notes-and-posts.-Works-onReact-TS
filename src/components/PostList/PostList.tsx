import PostItem from '../PostItem/PostItem';

interface Post {
    id: number;
    title: string;
    body: string;
}
interface PostListProps {
    posts: Post[];
    title?: string;
    remove?: (post: Post) => void; 
}
const PostList = ({ posts, title, remove }: PostListProps) => {
    if (!posts.length) {
        return <h1>Посты не найдены</h1>;
    }
    
    return (
        <div>
            <h1 className='postList'>
                {title}
        </h1>
            
                {posts.map((post, index) => 
                   
                        <PostItem remove={remove} num={index + 1} post={post} />
                    
                )}
        </div>
    );
};
export default PostList;