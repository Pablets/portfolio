import React from "react"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"
import Navbar from "../components/navbar"

const Layout = ({ location, children }) => {
  return (
    <TransitionProvider
      location={location}
      mode="successive"
      enter={{
        opacity: 0,
        config: {
          mass: 10,
          tension: 150,
          friction: 30,
          clamp: true,
        },
        onRest: () => {},
      }}
      usual={{
        opacity: 1,
      }}
      leave={{
        opacity: 0,
        config: {
          duration: 400,
        },
      }}
    >
      <Navbar />
      <TransitionViews>{children}</TransitionViews>
    </TransitionProvider>
  )
}

export default Layout
