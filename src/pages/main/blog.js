import React from "react"
import { useMediaQuery } from "react-responsive"

const BlogPage = () => {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 649px)",
  })
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 650px)",
  })
  return (
    <>
      {isMobile && <h1 className="fullScreen" id="blog" >Blog</h1>}
      {isDesktop && (
          <h1 id="blog">Blog</h1>
      )}
    </>
  )
}

export default BlogPage
