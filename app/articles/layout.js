import React from "react";

export const metadata={
  title:"Articles"
}
function layout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: " 100vh",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          width: "150px",
          marginTop: "20px",
          padding: "5px",
          borderBottom: "5px solid white",
        }}
      >
        Articles
      </h1>
      {children}
    </div>
  );
}

export default layout;
