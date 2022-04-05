import React from "react";
import styles from "./Post.module.scss";

const Post = ({ post, onDelete }) => {
  return (
    <div className={styles.item}>
      <h4>
        {post.id} - {post.title}
      </h4>
      <p>{post.body}</p>
      <button onClick={onDelete}>delete</button>
    </div>
  );
};

export default Post;
