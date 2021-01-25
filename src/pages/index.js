import React from "react"
import Layout from "../components/layout"
import { useMediaQuery } from "react-responsive"

const Home = () => {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 649px)",
  })

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 650px)",
  })

  return (
    <>
      {isMobile && <div>I am running gatsby from mobile!!!</div>}
      {isDesktop && (
        <Layout>
          <div>I am running gatsby!!!</div>
        </Layout>
      )}
    </>
  )
}

export default Home