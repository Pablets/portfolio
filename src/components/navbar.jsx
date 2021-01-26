import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styles from "./navbar.module.css"
import { useMediaQuery } from "react-responsive"
import { debounce } from "../utilities/helpers"

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

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

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    )

    setPrevScrollPos(currentScrollPos)
  }, 100)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    if (visible) {
      setTimeout(function () {
        setVisible(false)
      }, 4000)
    }
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos, visible, handleScroll])

  return (
    <>
      {isMobile ? (
        <nav
          className={styles.nav}
          style={{
            transition: "top 0.6s",
            top: visible ? "0" : "-60px",
          }}
        >
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
        <nav>
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
