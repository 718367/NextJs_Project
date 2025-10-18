import React from 'react'

function page(props) {
    console.log(props)
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: " 100vh",
        gap:"10px"
      }}
    >
      <h1 style={{ color: "rgba(0, 197, 223, 1)" }}>This is article  </h1>
      <h3  >{props.params.article}</h3>
    </div>
  )
}

export default page
