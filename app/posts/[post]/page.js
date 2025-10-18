import { Suspense } from "react";
import PostDetails from "../../components/PostDetails.jsx"
import SimpleBackdrop from "./loading.js"
export const metadata = {
  title: "Post",
};

async function Post(props) {
  const postId = props.params.post;
  console.log("postId:", postId);
  
 
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        gap:"30px",
        flexDirection:"column",
        padding: "40px",
        color: "white",
      }}
    >
      <h1 style={{marginTop:"20px", color: "rgba(117, 0, 0, 1)" }}>This is post Details</h1>
     <Suspense fallback={<SimpleBackdrop></SimpleBackdrop>}>
      <PostDetails postId={postId}></PostDetails>
      </Suspense>
    </div>
  );
}

export default Post;
