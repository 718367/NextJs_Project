import React from 'react'

function featuredArticles(props) {
  console.log("@props.params88888888888888@:",props)
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
      <h1 style={{ color: "rgba(5, 99, 2, 1)" }}>This is Featured Articles  </h1>
    </div>
  )
}

export default featuredArticles
