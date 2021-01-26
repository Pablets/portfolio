import React from "react"
import { useMediaQuery } from "react-responsive"

const About = () => {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 649px)",
  })
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 650px)",
  })
  return (
    <>
      {isMobile && <h1 className="fullScreen" id="about" >About</h1>}
      {isDesktop && (
          <h1>About</h1>
      )}
    </>
  )
}

export default About
