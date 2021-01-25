import React from "react"
import { Link } from "gatsby"
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/portfolio">
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
