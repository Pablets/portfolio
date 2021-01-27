import React from "react"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"
import Navbar from "../components/navbar"
import styles from "./index.module.css"

const Layout = ({ location, children }) => {
  return (
    <TransitionProvider
      className={styles.blackBg}
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
      <TransitionViews className={styles.blackBg}>{children}</TransitionViews>
    </TransitionProvider>
  )
}

export default Layout
