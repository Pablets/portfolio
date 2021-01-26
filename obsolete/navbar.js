// import React, { useState, useEffect } from "react"
import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styles from "./navbar.module.css"
import { useMediaQuery } from "react-responsive"
// import { debounce } from "../utilities/helpers"

const Navbar = () => {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 649px)",
  })

  const home = isMobile ? "top" : ""

  const routes = [
    ["Home", home],
    ["About", "about"],
    ["Portfolio", "portfolio"],
    ["Blog", "blog"],
    ["Contact", "contact"],
  ]

  return (
    <>
      {isMobile ? (
        <nav className={styles.nav}>
          <ul>
            {routes.map((r, i) => (
              <li key={i * (i + 1)}>
                <AnchorLink className={styles.AnchorLink} to={`/main#${r[1]}`}>
                  {r[0]}
                </AnchorLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <nav className={styles.nav}>
          <ul>
            {routes.map((r, i) => (
              <li key={i * (i + 2)}>
                <Link className={styles.AnchorLink} to={`/main/${r[1]}`}>
                  {r[0]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <div className={styles.margin}></div>
    </>
  )
}

export default Navbar

// const [prevScrollPos, setPrevScrollPos] = useState(0)
//   const [visible, setVisible] = useState(true)

// useEffect(() => {
//   window.addEventListener("scroll", handleScroll)
//   return () => window.removeEventListener("scroll", handleScroll)
// }, [prevScrollPos, visible, handleScroll])

// const handleScroll = debounce(() => {
//   const currentScrollPos = window.pageYOffset

//   const timer = () => {
//     setTimeout(function () {
//       setVisible(false)
//     }, 4000)
//   }

//   if (visible) {
//     clearTimeout(timer)
//     timer()
//   } else {
//     clearTimeout(timer)
//     setVisible(
//       (prevScrollPos < currentScrollPos &&
//         prevScrollPos - currentScrollPos < 70) ||
//         currentScrollPos < 10
//     )
//   }
//   setPrevScrollPos(currentScrollPos)
//   clearTimeout()
// }, 100)
