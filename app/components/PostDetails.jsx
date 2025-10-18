import React from 'react'

async function PostDetails({postId}) {
  console.log("postId:", postId);
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await response.json();
  return (
    <>
      <div
        style={{
          width: "85%",
          backgroundColor: "rgba(255,255,255,0.08)",
          fontFamily: "Segoe UI, Roboto, sans-serif",
          borderRadius: "16px",
          padding: "40px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.7)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(6px)",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            color: "#e0e0e0",
            marginBottom: "15px",
          }}
        >
          {post.title}
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.7",
            color: "#cccccc",
            marginBottom: "25px",
          }}
        >
          {post.body}
        </p>
        <div
          style={{
            fontSize: "0.9rem",
            color: "rgba(200,200,200,0.6)",
            textAlign: "right",
          }}
        >
          Post ID: {postId}
        </div>
      </div>
    </>
  )
}

export default PostDetails
