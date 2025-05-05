import { useNavigate } from "react-router-dom";
import TheButton from "../UI/button/TheButton";

interface Post {
    id: number;
    title: string;
    body: string;
}
interface PostItemProps {
    post: Post;
    num?: number;
    remove?: (post: Post) => void; 
}
const PostItem = ({ post, remove }: PostItemProps) => {
    const router = useNavigate()
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{post.id}. {post.title}</strong>
                    <div>
                        {post.body}
                    </div>
                </div>
                <div className="post__btns">
                    <TheButton onClick={() => router(`/posts/${post.id}`)}>
                        Открыть
                    </TheButton>
                    <TheButton onClick={() => remove?.(post)}>удалить</TheButton> 
                </div>
            </div>
        </div>
    );
};
export default PostItem;