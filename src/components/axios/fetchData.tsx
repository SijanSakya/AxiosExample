

const getPosts = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  return posts;
};

export default async function Posts() {
  const posts = await getPosts();
  // console.log(posts);

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h1>Posts</h1>
      <ul>
        {posts.slice(0,10).map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
