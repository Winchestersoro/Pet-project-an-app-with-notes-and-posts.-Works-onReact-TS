
import { useState } from 'react';
import TheButton from '../UI/button/TheButton';
import TheInput from '../UI/input/TheInput';

interface PostFormProps {
    create: (newPost: Post) => void;
}

interface Post {
    id: number;
    title: string;
    body: string;
}

const PostForm = ({create}: PostFormProps) => {

    const [post, setPost] = useState({title: '', body : ''})

    const addNewPost = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newPost = {
            ...post, id:Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
      }
  

    return (
        <form>
            <TheInput 
        onChange={e => setPost({...post,title : e.target.value})}
        value={post.title}
        type="text"
        placeholder='Название поста' />
            <TheInput 
        onChange={e => setPost({...post,body : e.target.value})}
        value={post.body}
        type="text" 
        placeholder='Описание поста' />
            <TheButton onClick= {addNewPost}>Создать пост</TheButton>
    </form>
    );
};

export default PostForm;