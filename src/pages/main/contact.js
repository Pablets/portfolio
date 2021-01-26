import React from "react"
import { useMediaQuery } from "react-responsive"

const Contact = () => {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 649px)",
  })
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 650px)",
  })
  return (
    <>
      {isMobile && (
        <h1 className="fullScreen" id="contact">
          Contact
        </h1>
      )}
      {isDesktop && (
        <>
          <h1 className="fullScreen">Contact</h1>
          <p>This will be my contact form</p>
        </>
      )}
    </>
  )
}

export default Contact
