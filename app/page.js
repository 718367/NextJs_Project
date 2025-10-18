import Todo from "./components/Todo.jsx";

export const metadata = {
  title: "Home",
};
export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1",
    {
      // { cache:"force-cache" >> Static Side Generation (SSG) }
      // { cache:"no-store" >> Server Side Rendering (SSR) }

      // { Incremental Static Regeneration (ISG) }
      // next:{
      //   revalidate:60 >> after each 60 seconds rerequest the API
      // }
    }
  );
  const todos = await response.json();
  console.log(todos);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: " 100vh",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h1 style={{ color: "rgba(116, 3, 101, 1)" }}>Hello World</h1>
      <h2>{todos.title}</h2>
    </div>
  );
}
