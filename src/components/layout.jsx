import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import styles from "./layout.modules.css"
import "../styles/index.scss"

const Layout = props => {
  return (
    <div className={styles.bg}>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
