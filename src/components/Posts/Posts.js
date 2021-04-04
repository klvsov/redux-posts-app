import { useSelector } from 'react-redux';

import Post from './Post';

export const Posts = () => {
  const allPostsData = useSelector((state) => state.posts.postsArr);

  return allPostsData.map(
    ({
      id,
      author,
      date,
      image,
      content,
      fullContent,
      comments,
      likes,
      reposts,
    }) => {
      return (
        <Post
          key={id}
          userId={id}
          author={author}
          date={date}
          image={image}
          content={content}
          fullContent={fullContent}
          comments={comments}
          likes={likes}
          reposts={reposts}
        />
      );
    }
  );
};
