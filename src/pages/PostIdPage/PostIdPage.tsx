import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetching from '../../hooks/useFetching';
import PostServise from '../../components/API/PostServise';
import Loader from '../../components/UI/Loader/Loader';
const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({}); 
    const [comments, setComments] = useState([]); 
    const { fetching: fetchPostById, isLoading } = useFetching({
        callback: async () => {
            const response = await PostServise.getById(params.id);
            setPost(response.data);
        }
    });

    const { fetching: fetchComments, isLoading:isComLoading } = useFetching({
        callback: async () => {
            const response = await PostServise.getCommentsByPostId(params.id);
            setComments(response.data);
        }
    });

    useEffect(() => {
        fetchPostById(params.id); 
        fetchComments(params.id)
    }, []); 
   
    return (
        <div>
            <h1>Вы открыли страницу поста под номером {params.id}</h1>
            {isLoading
            ? <Loader/>
            : <div >{post.id}. {post.title}</div>
            }
            <h2> Комментарии </h2>
            {isComLoading
            ? <Loader/>
            : <div > {comments.map(comm =>
                <div>
                    <h5 style={{marginTop:15}}>
                             {comm.email}
                        <div>{comm.body}</div>
                    </h5>
                </div>
            )}</div>
            }
        </div>
    );
};
export default PostIdPage;