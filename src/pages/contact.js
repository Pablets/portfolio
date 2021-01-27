import React from "react"
import About from "./about"
import Blog from "./blog"
import Contact from "./about"
import Portfolio from "./portfolio"
import { useMediaQuery } from "react-responsive"
import "../styles/index.scss"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styles from "./index.module.css"

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
              <AnchorLink to={isMobile ? "/#about" : "/about"}>
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
          <div className={styles.hero} id="top">
            <div className={`${styles.heroText}`}>
              <h3 className={styles.h3}>Hello I'm</h3>
              <h1 className={`${styles.h1}`}>Pablo Godoy</h1>
              <p className={styles.p}>
                <strong>I'm a Front End Web Developer</strong>
              </p>
              <button>
                <AnchorLink className={`${styles.a}`} to={isMobile ? "/#about" : "/about"}>
                  About me
                </AnchorLink>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Home
