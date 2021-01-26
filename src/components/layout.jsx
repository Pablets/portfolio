import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import styles from "./layout.modules.css"
import "../styles/index.scss"
import { useMediaQuery } from "react-responsive"

const Layout = props => {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 650px)",
  })
  return (
    isDesktop && (
      <div className={styles.marginTop}>
        <Navbar />
        {props.children}
        <Footer />
      </div>
    )
  )
}

export default Layout
