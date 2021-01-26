import React from "react"
import Layout from "../../components/layout"
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
        <Layout>
          <h1 id="blog">Blog</h1>
        </Layout>
      )}
    </>
  )
}

export default BlogPage
