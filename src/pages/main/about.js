import React from "react"
import About from "./about"
import Blog from "./blog"
import Contact from "./about"
import Portfolio from "./portfolio"
import { useMediaQuery } from "react-responsive"
import "../../styles/index.scss"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styles from "./about.module.css"

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
            <h1>About me</h1>
            <p>
              I'm a Front End Web Developer living in Buenos Aires Constantly
              learning and improving my skills to keep actualliced with the
              latest industry-standard technologies and methodologies. Actually
              working with MERN stack. Skills: Javascript | NodeJS | Express |
              React | Redux | ProsgreSQL | MongoDB | HTML | CSS3 | GIT
              Methodologies: AGILE | SCRUM.
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
          <div className={styles.hero} id="top">
            <div className={`${styles.heroText}`}>
            <h1 className={`${styles.h1}`}>About me</h1>
            <p className={`${styles.p}`}>
              I'm a Front End Web Developer living in Buenos Aires Constantly
              learning and improving my skills to keep actualliced with the
              latest industry-standard technologies and methodologies. Actually
              working with MERN stack. Skills: Javascript | NodeJS | Express |
              React | Redux | ProsgreSQL | MongoDB | HTML | CSS3 | GIT
              Methodologies: AGILE | SCRUM.
            </p>
              <button>
                <AnchorLink
                  className={`${styles.a}`}
                  to={isMobile ? "/main#about" : "/main/portfolio"}
                >
                  My work
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
