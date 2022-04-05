import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, deletePost } from "../stateManagement/actions/postAction";
import Post from "./Post";

const PostList = () => {
  const { posts, loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading ...</h1>
      ) : (
        posts.map((post, index) => (
          <Post
            post={post}
            key={index}
            onDelete={() => dispatch(deletePost(post.id))}
          />
        ))
      )}
    </div>
  );
};

export default PostList;
