import React from "react"
import About from "./about"
import Blog from "./blog"
import Contact from "./contact"
import Portfolio from "./portfolio"
import { useMediaQuery } from "react-responsive"
import "../../styles/index.scss"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Home = () => {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 649px)",
  })
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 650px)",
  })

  return (
    <>
      {isMobile && (
        <>
          <div className={"marginTop fullScreen"} id="top">
            <h3>Hello I'm</h3>
            <h1>Pablo Godoy</h1>
            <p>
              <strong>I'm a Front End Web Developer</strong>
            </p>
            <button>
              <AnchorLink to={isMobile ? "/main#about" : "/main/about"}>
                About me
              </AnchorLink>
            </button>
          </div>
          <About />
          <Portfolio />
          <Blog />
          <Contact />
        </>
      )}
      {isDesktop && (
        <>
          <div className="marginTop" id="top">
            <h3>Hello I'm</h3>
            <h1>Pablo Godoy</h1>
            <p>
              <strong>I'm a Front End Web Developer</strong>
            </p>
            <button>
              <AnchorLink to={isMobile ? "/main#about" : "/main/about"}>
                About me
              </AnchorLink>
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default Home
