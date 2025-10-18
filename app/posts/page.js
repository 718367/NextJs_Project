import Link from "next/link";

export const metadata = {
  title: "Posts",
};

async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  const posts = await response.json();
  console.log(posts);
  const postsJSX = posts.map((post) => {
    return (
      <Link href={`/posts/${post.id}`} style={{ width: "70%" }} key={post.id}>
        <div
          key={post.id}
          style={{
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            color: "white",
            padding: "20px",
            margin: "20px auto",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(6px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <h1
            style={{
              fontSize: "1.5rem",
              marginBottom: "10px",
              color: "#e0e0e0",
            }}
          >
            {post.title}
          </h1>
          <p
            style={{
              fontWeight: "400",
              lineHeight: "1.6",
              color: "#cfcfcf",
            }}
          >
            {post.body}
          </p>
        </div>
      </Link>
    );
  });
  return (
    <div
      style={{
        margin: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <h1 style={{ color: "rgba(117, 0, 0, 1)" }}>This is posts pag</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexDirection: "column",
        }}
      >
        {postsJSX}
      </div>
    </div>
  );
}

export default PostsPage;
