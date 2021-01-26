import React from "react"
import { useMediaQuery } from "react-responsive"

const Portfolio = () => {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 649px)",
  })
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 650px)",
  })
  return (
    <>
      {isMobile && <h1  className="fullScreen" id="portfolio" >Portfolio</h1>}
      {isDesktop && (
          <h1>Portfolio</h1>
      )}
    </>
  )
}

export default Portfolio