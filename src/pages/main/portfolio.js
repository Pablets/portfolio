import React from "react"
import { useMediaQuery } from "react-responsive"
import styles from "./portfolio.module.css"
import works from "../../data/index"
import Works from "../../components/works"

const Portfolio = () => {

  console.log(works)


  const isMobile = useMediaQuery({
    query: "(max-device-width: 649px)",
  })
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 650px)",
  })
  return (
    <>
      {isMobile && (
        <h1 className="fullScreen" id="portfolio">
          Portfolio
        </h1>
      )}
      {isDesktop && (
        <>
          <h1 className={`${styles.h1}`}>Portfolio</h1>
          <Works works={works}/>
        </>
      )}
    </>
  )
}

export default Portfolio
