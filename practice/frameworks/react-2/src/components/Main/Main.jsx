import { Post } from "../Post/Post";

export const Main = ({ postsData }) => {
  return (
    <main className="main">
      {postsData.map((post) => (
        <Post title={post.title} text={post.text} date={post.date} />
      ))}
    </main>
  );
};
